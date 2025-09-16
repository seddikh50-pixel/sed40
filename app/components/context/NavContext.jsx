'use client'

import { createContext, useContext, useState } from 'react';

const NavContextContext = createContext();

export function NavContext( {children}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <NavContextContext.Provider value={[isOpen, setIsOpen]}>
      {children}
    </NavContextContext.Provider>
  );
}


export const useNavContext = () => useContext(NavContextContext);
