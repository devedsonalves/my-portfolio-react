export const PixelAvatar = ({ className = '' }: { className?: string }) => (
  <img
    src="/edson-pixel.png"
    alt=""
    width={64}
    height={64}
    className={`pixel-avatar ${className}`}
  />
)
