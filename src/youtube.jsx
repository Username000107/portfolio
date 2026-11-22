// 긴 영상은 YouTube로 넣습니다. id는 영상 주소의 v= 뒤에 있는 값입니다.
export function YouTube({ id, title, className, eager = false }) {
  return (
    <iframe
      className={className}
      src={`https://www.youtube-nocookie.com/embed/${id}`}
      title={title}
      loading={eager ? 'eager' : 'lazy'}
      allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
      allowFullScreen
    />
  );
}
