import { AppShell } from '@astryxdesign/core/AppShell';
import { SideNav, SideNavHeading, SideNavItem, SideNavSection } from '@astryxdesign/core/SideNav';
import { Text } from '@astryxdesign/core/Text';
import { profile, works } from './content.js';
import { SiteLink } from './links.jsx';

// 사이트의 틀입니다. 왼쪽 글 열과 오른쪽 내용 영역으로 이루어집니다.
//   current  지금 열려 있는 항목의 id
//   playing  훅 이미지가 보이고 있는 작업의 순서(없으면 -1)
//   bar      훅 이미지 진행선
//   detail   목록 아래에 보여 줄 설명
//   follow   목록을 눌렀을 때 페이지 이동 없이 처리할 함수를 만듭니다
export function SiteShell({ className, current = '', playing = -1, bar = null, detail = null, follow, onName, nameAs: Name = 'p', children }) {
  const item = (id, label, itemClass, extra) => (
    <SideNavItem
      key={id}
      label={label}
      size="lg"
      href={`#${id}`}
      className={itemClass}
      isSelected={current === id}
      onClick={follow?.(id)}
      {...extra}
    />
  );

  const column = (
    <div className="column">
      <SideNav
        className="side"
        aria-label="주요 메뉴"
        header={
          <Name className="who">
            <SideNavHeading heading={profile.heading} headingHref="./" onClick={onName} />
          </Name>
        }
      >
        <SideNavSection title="작업" isHeaderHidden>
          {works.map((work, i) =>
            item(work.id, work.nav, `cue cue${i + 1}${playing === i ? ' playing' : ''}`, {
              endContent: playing === i ? bar : undefined,
            }),
          )}
        </SideNavSection>
        <SideNavSection title="안내" isHeaderHidden>
          {item('about', '소개', 'go go1')}
          {item('contact', '연락', 'go go2')}
        </SideNavSection>
      </SideNav>
      {detail}
      <div className="reach">
        <SiteLink to={profile.email ? `mailto:${profile.email}` : null} type="supporting">
          {profile.email ?? '[이메일]'}
        </SiteLink>
        <Text as="p" type="supporting" color="secondary" display="block">
          {profile.copyright}
        </Text>
      </div>
    </div>
  );

  return (
    <AppShell className={`root ${className}`} sideNav={column} contentPadding={0} mobileNav={{ breakpoint: 'none', hasToggle: false }}>
      {children}
    </AppShell>
  );
}
