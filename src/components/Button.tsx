import React, { useEffect } from 'react';


interface ButtonProps {
  label?: string;
  onClick?: () => void;
  sx?: {};
  classnames?: string;
  setUser?: any;
  target?: Element;
}


const Button = ({ label, onClick, sx, classnames, setUser, target }: ButtonProps) => {
    const handleClick = () => {
      if (onClick) {
        onClick();
      }
    };
  
    useEffect(() => {
      if (target) {
        target.addEventListener('click', handleClick);
  
        return () => {
          target.removeEventListener('click', handleClick);
        };
      }
    }, [target, handleClick]);
  
    return (
      <button className={classnames} style={sx} onClick={handleClick}>
        {label}
      </button>
    );
  };
  

  export default Button;