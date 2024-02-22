import React from 'react';
import Sidebar from '../components/sitebar';

export interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Sidebar />
      <div className="ml-60">{children}</div>
    </>
  );
}
