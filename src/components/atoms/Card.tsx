import { FC } from 'react';

export const Card: FC = ({ children }) => {
  return <div className="rounded-lg shadow-lg overflow-hidden">{children}</div>;
};
