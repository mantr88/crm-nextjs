import React from 'react';

export enum Status {
  Active = 'active',
  NonActive = 'nonActive',
  Pending = 'pending',
  Suspended = 'suspended',
}

export interface StatusLabelProps {
  children: React.ReactNode;
  status: Status;
}

function StatusLabel({
  children,
  status,
}: StatusLabelProps) {
  return (
    <span
      className={`inline-flex items-center py-1 px-3.5 rounded-3xl text-sm font-medium ${
        (status === Status.Active &&
          'text-green-700 bg-green-100') ||
        (status === Status.NonActive &&
          'text-red-700 bg-red-100') ||
        (status === Status.Pending &&
          'text-orange-700 bg-orange-100') ||
        (status === Status.Suspended &&
          'text-blue-700 bg-blue-100') ||
        ''
      }`}
    >
      <div className="w-1 h-1 mr-2 rounded-full bg-current" />
      {children}
    </span>
  );
}

export default StatusLabel;
