import { FC } from 'react';

export const BaseCard: FC = ({ children }) => {
  return <div className="rounded-lg shadow-lg border p-6 ">{children}</div>;
};
