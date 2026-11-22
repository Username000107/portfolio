import { useCallback, useEffect, useState } from 'react';
import { Badge } from '@astryxdesign/core/Badge';
import { List, ListItem } from '@astryxdesign/core/List';
import { Text } from '@astryxdesign/core/Text';
import { VisuallyHidden } from '@astryxdesign/core/VisuallyHidden';
import { useMediaQuery } from '@astryxdesign/core/hooks';
import { mount } from './app.jsx';
import { about, details, profile, works } from './content.js';
import { WorkDetail } from './detail.jsx';
import { HookBar, HookImages, Still, useHookImages } from './hook-images.jsx';
import { SiteLink, siteUrl } from './links.jsx';
import { SiteShell } from './shell.jsx';
import { YouTube } from './youtube.jsx';

const views = [...works.map((work) => work.id), 'about', 'contact'];
const workById = (id) => works.find((work) => work.id === id);

const currentHash = () => window.location.hash.slice(1);

// 넓은 화면의 조건입니다. site.css의 같은 조건과 맞춰 둡니다.
const WIDE = '(min-width: 1024px) and (min-aspect-ratio: 3 / 2)';

// 화면을 바꾸면 맨 위에서 시작하도록, 브라우저가 스크롤 위치를 되돌리지 않게 합니다.
if ('scrollRestoration' in window.history) window.history.scrollRestoration = 'manual';

// 지금 보는 항목을 주소의 #과 맞춥니다. 뒤로 가기와 공유한 주소가 그대로 동작합니다.
function useView() {
  const [view, setView] = useState(() => (views.includes(currentHash()) ? currentHash() : ''));
  useEffect(() => {
    // '본문으로 건너뛰기'처럼 화면과 상관없는 #이면 지금 화면을 그대로 둡니다.
    const sync = () => {
      const hash = currentHash();
      if (hash === '' || views.includes(hash)) setView(hash);
    };
    window.addEventListener('popstate', sync);
    window.addEventListener('hashchange', sync);
    return () => {
      window.removeEventListener('popstate', sync);
      window.removeEventListener('hashchange', sync);
    };
  }, []);
  const go = useCallback((next) => {
    if (currentHash() !== next) window.history.pushState(null, '', next ? `#${next}` : window.location.pathname + window.location.search);
    setView(next);
  }, []);
  return [view, go];
}

// 새 탭으로 열기 같은 동작은 브라우저에 맡깁니다.
const isPlainClick = (event) => event.button === 0 && !event.metaKey && !event.ctrlKey && !event.shiftKey && !event.altKey;

function Player({ work, reduced }) {
  const video = siteUrl(work.video);
  const poster = siteUrl(work.poster);
  const title = `${work.nav} 플레이 영상`;
  let media = (
    <>
      <Still work={work} eager alt={`${work.nav} 대표 스크린샷`} />
      <Badge className="tag" label="플레이 영상 자리" />
    </>
  );
  if (work.youtubeId) {
    media = <YouTube className="art contain" id={work.youtubeId} title={title} eager />;
  } else if (video) {
    media = (
      <video className="art contain" src={video} poster={poster ?? undefined} controls muted autoPlay={!reduced} playsInline preload="metadata" aria-label={title} />
    );
  }
  return (
    <div className="player on" data-work={work.id}>
      {media}
    </div>
  );
}

function WorkPanel({ work, onMore }) {
  return (
    <section id={`v-${work.id}`} className="panel work">
      <VisuallyHidden as="h2">{work.title} 소개</VisuallyHidden>
      <Text as="p" type="supporting" color="secondary" display="block" className="meta">
        {work.meta}
      </Text>
      <Text as="p" display="block">
        {work.body[0]}
      </Text>
      {work.points ? (
        <List className="pts" listStyle="disc" density="compact" edge="flush">
          {work.points.map((point) => (
            <ListItem key={point} label={point} />
          ))}
        </List>
      ) : (
        <Text as="p" display="block">
          {work.body[1]}
        </Text>
      )}
      <p className="links">
        {details[work.id] ? (
          <SiteLink to={`#${work.id}`} className="lk more" onClick={onMore}>
            자세히 보기
          </SiteLink>
        ) : work.link ? (
          <SiteLink to={work.link.to} className="lk">
            {work.link.label}
          </SiteLink>
        ) : (
          <Text color="secondary" className="lk">
            {work.note}
          </Text>
        )}
      </p>
    </section>
  );
}

function AboutPanel() {
  return (
    <section id="v-about" className="panel">
      <VisuallyHidden as="h2">소개</VisuallyHidden>
      <div className="stack">
        {about.story.map((paragraph) => (
          <Text key={paragraph} as="p" display="block">
            {paragraph}
          </Text>
        ))}
      </div>
      <Text as="p" display="block">
        {about.tools}
      </Text>
    </section>
  );
}

function ContactPanel() {
  return (
    <section id="v-contact" className="panel">
      <VisuallyHidden as="h2">연락</VisuallyHidden>
      <p className="mail">
        <SiteLink to={profile.email ? `mailto:${profile.email}` : null} type="large" weight="normal">
          {profile.email ?? '[이메일]'}
        </SiteLink>
      </p>
      <p className="links">
        <SiteLink to={profile.resume} className="lk">
          이력서 PDF
        </SiteLink>
        <SiteLink to={profile.itch} className="lk">
          itch.io
        </SiteLink>
        <SiteLink to={profile.artstation} className="lk">
          ArtStation
        </SiteLink>
      </p>
    </section>
  );
}

function Detail({ view, openWork, onMore }) {
  if (view === 'about') return <AboutPanel />;
  if (view === 'contact') return <ContactPanel />;
  return openWork ? <WorkPanel work={openWork} onMore={onMore} /> : null;
}

function Home() {
  const [view, go] = useView();
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const wide = useMediaQuery(WIDE);
  const [restart, setRestart] = useState(0);
  const openWork = workById(view);
  const { index, clock } = useHookImages({ running: !openWork, restart, reduced });

  useEffect(() => {
    const label = openWork?.nav ?? { about: '소개', contact: '연락' }[view];
    document.title = label ? `${label} - ${profile.heading}` : profile.heading;
  }, [view, openWork]);

  // 다른 항목을 열면 맨 위에서 시작합니다. 좁은 화면은 목록이 영상 아래에 있어서 그대로 둡니다.
  useEffect(() => {
    if (window.matchMedia(WIDE).matches) window.scrollTo(0, 0);
  }, [view]);

  const follow = (next) => (event) => {
    if (!isPlainClick(event)) return;
    event.preventDefault();
    go(next);
  };
  const backToFirst = (event) => {
    if (!isPlainClick(event)) return;
    event.preventDefault();
    go('');
    setRestart((n) => n + 1);
  };
  const pressImage = (event) => {
    if (!isPlainClick(event)) return;
    event.preventDefault();
    go(works[clock.pressed()].id);
  };

  // '자세히 보기'는 다른 페이지로 가지 않고, 영상 아래에 이어지는 내용으로 스크롤합니다.
  const showMore = (event) => {
    if (!isPlainClick(event)) return;
    event.preventDefault();
    document.getElementById('detail')?.scrollIntoView({ behavior: reduced ? 'auto' : 'smooth', block: 'start' });
    document.getElementById('detail-title')?.focus({ preventScroll: true });
  };

  const page = openWork ? details[openWork.id] : null;
  const more = page ? (
    <WorkDetail key={openWork.id} page={page} next={{ href: `#${page.next.work}`, onClick: follow(page.next.work), label: page.next.label }} />
  ) : null;
  const panel = <Detail view={view} openWork={openWork} onMore={showMore} />;

  return (
    <SiteShell
      className={`page-home${view ? ` picked is-${view}` : ''}${more ? ' has-more' : ''}`}
      current={view}
      playing={view === '' ? index : -1}
      bar={reduced ? null : <HookBar clock={clock} />}
      // 좁은 화면에서는 설명 바로 아래에, 넓은 화면에서는 영상 아래에 자세한 내용이 이어집니다.
      detail={
        <>
          {panel}
          {!wide && more}
        </>
      }
      follow={follow}
      onName={backToFirst}
      nameAs="h1"
    >
      <div className="stage">{openWork ? <Player key={openWork.id} work={openWork} reduced={reduced} /> : <HookImages index={index} onPress={pressImage} />}</div>
      {wide && more}
    </SiteShell>
  );
}

mount(Home);
