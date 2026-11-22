import { Button } from '@astryxdesign/core/Button';
import { Link } from '@astryxdesign/core/Link';

const root = document.documentElement.dataset.root ?? './';

// content.js의 경로를 지금 페이지 기준 주소로 바꿉니다. 비어 있으면 null을 돌려줍니다.
export function siteUrl(path) {
  if (!path) return null;
  return /^[a-z][a-z0-9+.-]*:/i.test(path) ? path : root + path;
}

const stay = (event) => event.preventDefault();

// 주소가 아직 없으면 눌러도 이동하지 않는 링크가 됩니다.
export function SiteLink({ to, children, ...props }) {
  const href = siteUrl(to);
  return (
    <Link href={href ?? '#'} hasUnderline color="primary" {...props} onClick={href ? props.onClick : stay}>
      {children}
    </Link>
  );
}

// 레벨 기획서 PDF를 새 탭으로 여는 버튼입니다. 강조색은 이 버튼에만 씁니다.
export function DocButton({ to, label = '레벨 기획서 보기 (PDF)' }) {
  return <Button className="docbtn" label={label} variant="primary" size="lg" href={siteUrl(to)} target="_blank" rel="noopener noreferrer" />;
}
