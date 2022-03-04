import React from 'react';
import './styles.css';

export interface LogoProps {
  srcIcon: string;
}

export const Logo: React.FC<LogoProps> = ({ srcIcon }) => {
  return (
    <div>
      <img src={srcIcon} alt="" />
    </div>
  );
};
