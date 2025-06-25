import React, { ReactNode } from 'react';

export interface WrapperProps {
  children: ReactNode;
}

const Wrapper = ({ children }: WrapperProps) => (
  <div className="content-wrapper">{children}</div>
);

export default Wrapper;
