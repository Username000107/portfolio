import { AspectRatio } from '@astryxdesign/core/AspectRatio';
import { Divider } from '@astryxdesign/core/Divider';
import { Heading } from '@astryxdesign/core/Heading';
import { Link } from '@astryxdesign/core/Link';
import { MetadataList, MetadataListItem } from '@astryxdesign/core/MetadataList';
import { Text } from '@astryxdesign/core/Text';
import { siteUrl } from './links.jsx';

// 이미지 한 장과 그 아래 설명입니다. 틀의 비율을 먼저 잡아 두어, 이미지가 늦게 떠도 글이 밀리지 않습니다.
function Figure({ image }) {
  return (
    <figure className="figure">
      <AspectRatio ratio={16 / 9} className="frame">
        <img src={siteUrl(image.src)} alt={image.alt} loading="lazy" />
      </AspectRatio>
      <figcaption>
        <Text type="supporting" color="secondary">
          {image.caption}
        </Text>
      </figcaption>
    </figure>
  );
}

// 스크린샷 한 장에 제목과 글이 붙은 덩어리입니다. note는 제목 아래의 흐린 한 줄입니다.
function Shot({ shot }) {
  return (
    <figure className="shot">
      <AspectRatio ratio={16 / 9} className="frame">
        <img src={siteUrl(shot.src)} alt={shot.alt} loading="lazy" />
      </AspectRatio>
      <figcaption>
        <Heading level={4}>{shot.title}</Heading>
        {shot.note && (
          <Text as="p" type="supporting" color="secondary" display="block">
            {shot.note}
          </Text>
        )}
        <Text as="p" display="block">
          {shot.body}
        </Text>
      </figcaption>
    </figure>
  );
}

// 기획 의도와 컨셉이 같은 모양을 씁니다. 왼쪽에 절 이름, 오른쪽에 한 문장과 설명, 그 아래 스크린샷 세 장입니다.
function Topic({ name, topic, children }) {
  return (
    <section className="block">
      <div className="split">
        <Heading level={3}>{name}</Heading>
        <div className="prose">
          <Text as="p" type="large" display="block" className="say">
            {topic.title}
          </Text>
          <Text as="p" display="block">
            {topic.text}
          </Text>
        </div>
      </div>
      <div className="trio">
        {topic.shots.map((shot) => (
          <Shot key={shot.src} shot={shot} />
        ))}
      </div>
      {children}
    </section>
  );
}

// 작업 하나의 상세입니다. 작업을 열면 영상 아래에 이어지고, 스크롤해서 봅니다.
//   page    content.js의 details에 있는 내용
//   next    다음 작업으로 가는 링크의 { href, onClick, label }
export function WorkDetail({ page, next }) {
  const { intent, concept, references, ai, blockout } = page;
  return (
    <article id="detail" className="doc" aria-labelledby="detail-title">
      <header className="doc-head">
        <div className="doc-title">
          <Heading level={2} id="detail-title">
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

      <Topic name="기획 의도" topic={intent}>
        <div className="flow">
          <Text type="supporting" color="secondary">
            감정의 흐름
          </Text>
          <ol>
            {intent.flow.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      </Topic>

      <Topic name="컨셉" topic={concept} />

      <section className="split">
        <Heading level={3}>레퍼런스</Heading>
        <MetadataList className="refs" columns={2}>
          {references.map((reference) => (
            <MetadataListItem key={reference.name} label={reference.name}>
              {reference.take}
            </MetadataListItem>
          ))}
        </MetadataList>
      </section>

      <section className="block">
        <div className="split">
          <Heading level={3}>AI 활용</Heading>
          <Text as="p" display="block" className="prose">
            {ai.text}
          </Text>
        </div>
        <div className="trio">
          {ai.items.map((item) => (
            <section key={item.title} className="note">
              <Heading level={4}>{item.title}</Heading>
              <Text as="p" display="block">
                {item.body}
              </Text>
            </section>
          ))}
        </div>
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
            <Figure image={blockout.before} />
            <Figure image={blockout.after} />
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
