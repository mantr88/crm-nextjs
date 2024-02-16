import React from 'react';
import css from './non-active-label.module.css';

export interface NonActiveLabelProps {
  children: React.ReactNode;
}

function NonActiveLabel({ children }: NonActiveLabelProps) {
  return <span className={css.label}>{children}</span>;
}

export default NonActiveLabel;
