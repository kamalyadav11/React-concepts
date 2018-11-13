import React from "react";

const withClass = (WrappedComponent, className) => {
  return props => (
    <div className={className}>
      <WrappedComponent {...props} />
      {/**pass props to wrapped component as you get them */}
    </div>
  );
};

export default withClass;
