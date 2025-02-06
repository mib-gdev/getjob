import React from 'react';
import { useNavHeightContext } from '../../context/NavContext';

// Higher Order Component (HOC) that adds 10px padding to the first child only
export default function firstSection (WrappedComponent) {
  return ({ className, children, ...props }) => {
    const { navHeight } = useNavHeightContext();
    // Convert children to an array to be able to access the first one
    const childrenArray = React.Children.toArray(children);
    
    // Modify the first child to add padding
    const newChildren = childrenArray.map((child, index) => {
      if (index === 0) {
        
        // Add padding in nav height to the first child
        return React.cloneElement(child, {
          style: {
            ...child.props.style,
            padding:'100px',
          },
        });
      }
      return child;
    });

    // Combine the className passed to BoxWithPadding and the wrapped component
    const combinedClassName = className ? `box-with-padding ${className}` : 'box-with-padding';

    return (
      <WrappedComponent {...props} className={combinedClassName}>
        {newChildren}
      </WrappedComponent>
    );
  };
};