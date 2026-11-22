import { useEffect, useMemo, useRef, useState } from 'react';
import { ProgressBar } from '@astryxdesign/core/ProgressBar';
import { hookSeconds, works } from './content.js';
import { siteUrl } from './links.jsx';
import { placeholderArt } from './placeholders.js';

// 이미지가 바뀐 직후에 누르면 사용자가 보고 있던 직전 이미지로 처리합니다.
const CUT_GRACE = 0.25;

const indexAt = (seconds) => Math.floor(seconds / hookSeconds) % works.length;

// 지금 어느 작업의 훅 이미지를 보여 줄지 알려 줍니다. 동작 줄이기 설정에서는 첫 이미지에 멈춥니다.
export function useHookImages({ running, restart, reduced }) {
  const sinceRef = useRef(0);
  const [index, setIndex] = useState(0);

  const clock = useMemo(
    () => ({
      elapsed: () => (reduced ? 0 : (performance.now() - sinceRef.current) / 1000),
      progress() {
        return ((this.elapsed() % hookSeconds) / hookSeconds) * 100;
      },
      // 누른 순간에 보고 있던 이미지
      pressed() {
        return indexAt(Math.max(0, this.elapsed() - CUT_GRACE));
      },
    }),
    [reduced],
  );

  useEffect(() => {
    setIndex(0);
    if (!running || reduced) return undefined;
    sinceRef.current = performance.now();
    const id = setInterval(() => setIndex(indexAt(clock.elapsed())), 100);
    return () => clearInterval(id);
  }, [running, restart, reduced, clock]);

  return { index, clock };
}

export function HookBar({ clock }) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const tick = () => setValue(clock.progress());
    tick();
    const id = setInterval(tick, 150);
    return () => clearInterval(id);
  }, [clock]);
  return (
    <div className="hookbar" aria-hidden="true">
      <ProgressBar label="훅 이미지 진행" isLabelHidden value={value} />
    </div>
  );
}

// 이미지가 없으면 임시 그림을 보여 줍니다.
export function Still({ work, src = work.poster, eager = false, alt = '' }) {
  const url = siteUrl(src);
  if (url) return <img className="art" src={url} alt={alt} loading={eager ? 'eager' : 'lazy'} />;
  return <span className={`art art-${work.id}`} aria-hidden="true" dangerouslySetInnerHTML={{ __html: placeholderArt[work.id] }} />;
}

// 같은 이동을 왼쪽 목록이 맡으므로 보조 기술과 키보드에서는 건너뜁니다.
export function HookImages({ index, onPress }) {
  return (
    <div className="hooks" aria-hidden="true">
      {works.map((work, i) => (
        <a key={work.id} className={`hook${i === index ? ' on' : ''}`} href={`#${work.id}`} data-work={work.id} tabIndex={-1} onClick={onPress}>
          <Still work={work} src={work.hook ?? work.poster} eager />
        </a>
      ))}
    </div>
  );
}
