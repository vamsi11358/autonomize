// Avatar.tsx
import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size: 'small' | 'medium' | 'large';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size }) => {
  const containerStyle: React.CSSProperties = {
    overflow: 'hidden',
    borderRadius: '50%',
    width: size === 'small' ? '50px' : size === 'medium' ? '100px' : '150px',
    height: size === 'small' ? '50px' : size === 'medium' ? '100px' : '150px',
  };

  const imageStyle: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  };

  return (
    <div style={containerStyle}>
      <img src={src} alt={alt} style={imageStyle} />
    </div>
  );
};

export default Avatar;
