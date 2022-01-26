import React from 'react';
import './styles.css';

interface LogoProps {
  srcIcon: string;
}

export const Logo: React.FC<LogoProps> = ({ srcIcon }) => {
  return (
    <div>
      <img src={srcIcon} alt="" />
    </div>
  );
};
