import React, { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode; 
}

function Wrapper({ children }: WrapperProps) {
  return (
    <div className="col-12">
      <div className="main-container">
        <div className="wrapper">
          {children}
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
