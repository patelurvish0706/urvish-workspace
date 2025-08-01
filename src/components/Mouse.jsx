import React, { useEffect, useState } from 'react';

const Mouse = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMouse = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    document.addEventListener('mousemove', updateMouse);
    return () => document.removeEventListener('mousemove', updateMouse);
  }, []);

  const cursorStyle = {
    position: 'fixed',
    top: position.y,
    left: position.x,
    width: '100px',
    height: '100px',
    backgroundColor:'#3b83f623',
    boxShadow:'0px 0px 1000px 230px #3b83f623',
    borderRadius: '100%',
    pointerEvents: 'none',
    transform: 'translate(-50%, -50%)',
    zIndex: 999
  };

  return (
      <div style={cursorStyle}></div>
  );
};

export default Mouse;
