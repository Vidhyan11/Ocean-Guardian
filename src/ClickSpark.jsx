import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

const ClickSpark = ({ children, sparkColor, sparkSize, sparkCount, sparkRadius, duration }) => {
  useEffect(() => {
    const handleClick = (e) => {
      // Get click coordinates
      const x = e.clientX;
      const y = e.clientY;
      
      // Create sparks
      for (let i = 0; i < sparkCount; i++) {
        createSpark(x, y, sparkColor, sparkSize, sparkRadius, duration);
      }
    };
    
    // Function to create a single spark
    const createSpark = (x, y, color, size, radius, duration) => {
      // Create a spark element
      const spark = document.createElement('div');
      spark.style.position = 'fixed';
      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.width = `${size}px`;
      spark.style.height = `${size}px`;
      spark.style.backgroundColor = color;
      spark.style.borderRadius = '50%';
      spark.style.pointerEvents = 'none';
      spark.style.opacity = '1';
      spark.style.zIndex = '9999';
      
      // Add to body
      document.body.appendChild(spark);
      
      // Random angle for direction
      const angle = Math.random() * Math.PI * 2;
      const speed = Math.random() * radius + radius / 2;
      const tx = Math.cos(angle) * speed;
      const ty = Math.sin(angle) * speed;
      
      // Animate with keyframes
      spark.animate(
        [
          { transform: 'translate(0, 0) scale(1)', opacity: 1 },
          { transform: `translate(${tx}px, ${ty}px) scale(0)`, opacity: 0 }
        ],
        {
          duration: duration,
          easing: 'cubic-bezier(0.1, 0.8, 0.2, 1)'
        }
      );
      
      // Clean up the spark after animation
      setTimeout(() => {
        spark.remove();
      }, duration);
    };
    
    // Add click event listener to document
    document.addEventListener('click', handleClick);
    
    // Clean up event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [sparkColor, sparkSize, sparkCount, sparkRadius, duration]);
  
  return <>{children}</>;
};

ClickSpark.propTypes = {
  children: PropTypes.node.isRequired,
  sparkColor: PropTypes.string,
  sparkSize: PropTypes.number,
  sparkCount: PropTypes.number,
  sparkRadius: PropTypes.number,
  duration: PropTypes.number
};

ClickSpark.defaultProps = {
  sparkColor: '#fff',
  sparkSize: 5,
  sparkCount: 10,
  sparkRadius: 20,
  duration: 300
};

export default ClickSpark; 