import React from 'react';
import { AvatarContainer } from './styled';

export enum AvatarSize {
  SMALL = 'small',
  LARGE = 'large',
}

type AvatarProps = {
  image: string;
  size: AvatarSize;
};

const Avatar = ({ image, size }: AvatarProps) => {
  const styleSize = size === AvatarSize.SMALL ? 30 : 80;
  return (
    <AvatarContainer
      source={{ uri: image }}
      style={{
        width: styleSize,
        height: styleSize,
      }}
    />
  );
};

export default Avatar;
