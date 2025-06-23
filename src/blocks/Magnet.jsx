import { useState, useRef } from "react";

const Magnet = ({
  children,
  disabled = false,
  magnetStrength = 2,
  activeTransition = "transform 0.3s ease-out",
  inactiveTransition = "transform 0.5s ease-in-out",
  wrapperClassName = "",
  innerClassName = "",
  ...props
}) => {
  const [isActive, setIsActive] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const magnetRef = useRef(null);

  const handleMouseEnter = () => {
    if (disabled) return;
    setIsActive(true);
  };

  const handleMouseMove = (e) => {
    if (disabled || !magnetRef.current) return;

    const { left, top, width, height } = magnetRef.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    // Tính toán offset dựa trên vị trí chuột
    const offsetX = (e.clientX - centerX) / (magnetStrength * 0.5);
    const offsetY = (e.clientY - centerY) / (magnetStrength * 0.5);
    
    // Giới hạn khoảng cách di chuyển
    const maxOffset = 20;
    const clampedOffsetX = Math.max(-maxOffset, Math.min(maxOffset, offsetX));
    const clampedOffsetY = Math.max(-maxOffset, Math.min(maxOffset, offsetY));
    
    setPosition({ x: clampedOffsetX, y: clampedOffsetY });
  };

  const handleMouseLeave = () => {
    setIsActive(false);
    setPosition({ x: 0, y: 0 });
  };

  const transitionStyle = isActive ? activeTransition : inactiveTransition;

  return (
    <div
      ref={magnetRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
      onMouseEnter={handleMouseEnter}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <div
        className={innerClassName}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
          transition: transitionStyle,
          willChange: "transform",
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Magnet;
 