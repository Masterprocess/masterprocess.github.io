import React, { useState } from 'react';

interface ImageWithFallbackProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

export const ImageWithFallback: React.FC<ImageWithFallbackProps> = ({ src, fallbackSrc, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <img
      src={imgSrc}
      onError={() => {
        if (fallbackSrc) {
          setImgSrc(fallbackSrc);
        }
      }}
      {...rest}
    />
  );
};

export default ImageWithFallback;
