import { AspectRatio } from '@astryxdesign/core/AspectRatio';
import { Divider } from '@astryxdesign/core/Divider';
import { Heading } from '@astryxdesign/core/Heading';
import { Link } from '@astryxdesign/core/Link';
import { List, ListItem } from '@astryxdesign/core/List';
import { MetadataList, MetadataListItem } from '@astryxdesign/core/MetadataList';
import { Table, pixel, proportional } from '@astryxdesign/core/Table';
import { Text } from '@astryxdesign/core/Text';
import { siteUrl } from './links.jsx';

function Slot({ label }) {
  return <span className="slot">{label}</span>;
}

function Figure({ image, ratio = 4 / 3 }) {
  const src = siteUrl(image.src);
  return (
    <figure className="figure">
      <AspectRatio ratio={ratio} className="frame">
        {src ? <img src={src} alt={image.alt} loading="lazy" /> : <Slot label="이미지 자리" />}
      </AspectRatio>
      <figcaption>
        <Text type="supporting" color="secondary">
          {image.caption}
        </Text>
      </figcaption>
    </figure>
  );
}

function TopView({ image, beats }) {
  const src = siteUrl(image.src);
  const marked = beats.filter((beat) => beat.x != null && beat.y != null);
  if (!src) {
    return (
      <AspectRatio ratio={16 / 9} className="frame">
        <Slot label="레벨 탑뷰 스크린샷 자리" />
      </AspectRatio>
    );
  }
  return (
    <div className="topview frame">
      <img src={src} alt={image.alt} loading="lazy" />
      {marked.length > 1 && (
        <svg viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polyline points={marked.map((beat) => `${beat.x},${beat.y}`).join(' ')} />
        </svg>
      )}
      {marked.map((beat) => (
        <span key={beat.beat} className="beat-mark" style={{ left: `${beat.x}%`, top: `${beat.y}%` }}>
          {beat.beat}
        </span>
      ))}
    </div>
  );
}

// 훅과 클라이맥스는 색이 아니라 굵기로 구분합니다.
const beatCell = (key) => (beat) => <Text weight={beat.major ? 'semibold' : 'normal'}>{beat[key]}</Text>;

const beatColumns = [
  { key: 'time', header: '시간', width: pixel(96), renderCell: beatCell('time') },
  { key: 'beat', header: '비트', width: proportional(1, { minWidth: 136 }), renderCell: beatCell('beat') },
  { key: 'purpose', header: '장면과 목적', width: proportional(2, { minWidth: 160 }) },
];

// 세 칸이 좁아지는 폭에서는 CSS가 표 대신 위아래로 쌓은 목록을 보여 줍니다.
function Beats({ beats }) {
  return (
    <div className="beats">
      <Table className="beats-wide" columns={beatColumns} data={beats} idKey="beat" verticalAlign="top" />
      <MetadataList className="beats-narrow" columns={1} label={{ position: 'top' }}>
        {beats.map((beat) => (
          <MetadataListItem key={beat.beat} label={`${beat.time} ${beat.beat}`} className={beat.major ? 'major' : undefined}>
            {beat.purpose}
          </MetadataListItem>
        ))}
      </MetadataList>
    </div>
  );
}

function Era({ era }) {
  return (
    <section className="era">
      <Heading level={4}>{era.name}</Heading>
      <Text as="p" display="block">
        {era.state}
      </Text>
      <List className="pts" listStyle="disc" density="compact" edge="flush">
        <ListItem label={era.open} />
        <ListItem label={era.closed} />
      </List>
    </section>
  );
}

// 레퍼런스 이미지, 탑뷰, 시대 비교, 블록아웃 반복은 내용이 있을 때만 나옵니다.
// 작업 하나의 자세한 설명입니다. 홈에서 작업을 열면 영상 아래에 이어지고, 스크롤해서 봅니다.
//   page    content.js의 details에 있는 내용
//   next    다음 작업으로 가는 링크의 { href, onClick, label }
export function WorkDetail({ page, next }) {
  const { goals, references, route, blockout } = page;
  return (
    <article id="detail" className="doc" aria-labelledby="detail-title">
      <header className="doc-head">
        <div className="doc-title">
          <Heading level={2} id="detail-title" tabIndex={-1}>
            {page.title}
          </Heading>
          <Text as="p" type="large" weight="normal" display="block" className="lead">
            {page.lead}
          </Text>
        </div>
        <MetadataList className="specs" columns={2}>
          {page.specs.map((spec) => (
            <MetadataListItem key={spec.label} label={spec.label}>
              {spec.value}
            </MetadataListItem>
          ))}
        </MetadataList>
      </header>

      <section className="split">
        <Heading level={3}>디자인 목표</Heading>
        <div className="prose">
          <Text as="p" display="block">
            {goals.text}
          </Text>
          <List className="pts" listStyle="disc" density="compact" edge="flush">
            {goals.items.map((goal) => (
              <ListItem key={goal} label={goal} />
            ))}
          </List>
        </div>
      </section>

      <section className="block">
        <div className="split">
          <Heading level={3}>레퍼런스</Heading>
          <Text as="p" display="block" className="prose">
            {references.text}
          </Text>
        </div>
        {references.images?.length > 0 && (
          <div className="trio">
            {references.images.map((image) => (
              <Figure key={image.caption} image={image} />
            ))}
          </div>
        )}
      </section>

      <section className="block">
        <Heading level={3}>동선과 비트</Heading>
        {route.topView && <TopView image={route.topView} beats={route.beats} />}
        <Beats beats={route.beats} />
        {route.eras?.length > 0 && (
          <div className="duo">
            {route.eras.map((era) => (
              <Era key={era.name} era={era} />
            ))}
          </div>
        )}
      </section>

      {blockout && (
        <section className="block">
          <div className="split">
            <Heading level={3}>블록아웃 반복</Heading>
            <Text as="p" display="block" className="prose">
              {blockout.text}
            </Text>
          </div>
          <div className="duo">
            <Figure image={blockout.before} ratio={16 / 9} />
            <Figure image={blockout.after} ratio={16 / 9} />
          </div>
        </section>
      )}

      <footer className="doc-foot">
        <Divider />
        <div className="doc-links">
          <Link href={next.href} onClick={next.onClick} hasUnderline color="primary">
            {next.label}
          </Link>
        </div>
      </footer>
    </article>
  );
}
