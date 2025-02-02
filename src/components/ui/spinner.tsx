// components/ui/spinner.tsx
import { ReactNode } from 'react';

export const  Spinner = ({ size = 6 }: { size?: number }) => (
  <div
    className={`w-${size} h-${size} border-4 border-t-transparent border-blue-500 border-solid rounded-full animate-spin`}
  />
);
