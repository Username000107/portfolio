import { useCallback, useEffect, useState } from 'react';
import { Badge } from '@astryxdesign/core/Badge';
import { Heading } from '@astryxdesign/core/Heading';
import { List, ListItem } from '@astryxdesign/core/List';
import { Text } from '@astryxdesign/core/Text';
import { VisuallyHidden } from '@astryxdesign/core/VisuallyHidden';
import { useMediaQuery } from '@astryxdesign/core/hooks';
import { mount } from './app.jsx';
import { about, details, profile, works } from './content.js';
import { WorkDetail } from './detail.jsx';
import { HookBar, HookImages, Still, useHookImages } from './hook-images.jsx';
import { DocButton, SiteLink, siteUrl } from './links.jsx';
import { SiteShell } from './shell.jsx';
import { YouTube } from './youtube.jsx';

const views = [...works.map((work) => work.id), 'about'];
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
      {!poster && <Badge className="tag" label="플레이 영상 자리" />}
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

// 상세가 있는 작업은 같은 내용이 영상 아래에 더 자세히 나오므로, 여기에는 메타 한 줄과 레벨 기획서 버튼만 둡니다.
function WorkPanel({ work }) {
  const brief = Boolean(details[work.id]);
  return (
    <section id={`v-${work.id}`} className="panel work">
      <VisuallyHidden as="h2">{work.title} 소개</VisuallyHidden>
      <Text as="p" type="supporting" color="secondary" display="block" className="meta">
        {work.meta}
      </Text>
      {!brief && (
        <Text as="p" display="block">
          {work.body[0]}
        </Text>
      )}
      {!brief &&
        (work.points ? (
          <List className="pts" listStyle="disc" density="compact" edge="flush">
            {work.points.map((point) => (
              <ListItem key={point} label={point} />
            ))}
          </List>
        ) : (
          <Text as="p" display="block">
            {work.body[1]}
          </Text>
        ))}
      {work.doc && (
        <div className="cta">
          <DocButton to={work.doc} />
        </div>
      )}
      {work.link && (
        <p className="links">
          <SiteLink to={work.link.to} className="lk">
            {work.link.label}
          </SiteLink>
        </p>
      )}
    </section>
  );
}

function AboutPanel() {
  return (
    <section id="v-about" className="panel info">
      <Heading level={2}>{about.title}</Heading>
      <div className="stack">
        {about.story.map((paragraph) => (
          <Text key={paragraph} as="p" display="block">
            {paragraph}
          </Text>
        ))}
      </div>
      {(profile.email || profile.phone) && (
        <div className="contact">
          <Text type="supporting" color="secondary">
            연락처
          </Text>
          {profile.email && <SiteLink to={`mailto:${profile.email}`}>{profile.email}</SiteLink>}
          {profile.phone && <SiteLink to={`tel:${profile.phone.replace(/[^0-9+]/g, '')}`}>{profile.phone}</SiteLink>}
        </div>
      )}
      {profile.pr && (
        <div className="cta">
          <DocButton to={profile.pr} label="PR 문서 보기 (PDF)" />
        </div>
      )}
    </section>
  );
}

function Detail({ view, openWork }) {
  if (view === 'about') return <AboutPanel />;
  return openWork ? <WorkPanel work={openWork} /> : null;
}

function Home() {
  const [view, go] = useView();
  const reduced = useMediaQuery('(prefers-reduced-motion: reduce)');
  const wide = useMediaQuery(WIDE);
  const [restart, setRestart] = useState(0);
  const openWork = workById(view);
  const info = view === 'about';
  const { index, clock } = useHookImages({ running: view === '', restart, reduced });

  useEffect(() => {
    const label = openWork?.nav ?? { about: '소개' }[view];
    document.title = label ? `${label} - ${profile.heading}` : profile.heading;
  }, [view, openWork]);

  // 다른 항목을 열면 맨 위에서 시작합니다. 좁은 화면에서 긴 상세 끝의 '다음 작업'을 눌러도 영상부터 보입니다.
  useEffect(() => {
    window.scrollTo(0, 0);
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

  const page = openWork ? details[openWork.id] : null;
  const more = page ? (
    <WorkDetail key={openWork.id} page={page} next={{ href: `#${page.next.work}`, onClick: follow(page.next.work), label: page.next.label }} />
  ) : null;
  const panel = <Detail view={view} openWork={openWork} />;

  return (
    <SiteShell
      className={`page-home${view ? ` picked is-${view}` : ''}`}
      current={view}
      playing={view === '' ? index : -1}
      bar={reduced ? null : <HookBar clock={clock} />}
      // 좁은 화면에서는 설명 바로 아래에, 넓은 화면에서는 영상 아래에 상세가 이어집니다.
      detail={
        <>
          {!(wide && info) && panel}
          {!wide && more}
        </>
      }
      follow={follow}
      onName={backToFirst}
      nameAs="h1"
    >
      {/* 소개는 이미지 대신 그 내용을 오른쪽에 보여 줍니다. 좁은 화면에서는 목록 아래에 나옵니다. */}
      {!info && <div className="stage">{openWork ? <Player key={openWork.id} work={openWork} reduced={reduced} /> : <HookImages index={index} onPress={pressImage} />}</div>}
      {info && wide && <div className="info-area">{panel}</div>}
      {wide && more}
    </SiteShell>
  );
}

mount(Home);
