
import React from 'react';
export interface DropdownProps {
    label: string; 
    options: { value: string; label: string }[];
    value: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  }
  