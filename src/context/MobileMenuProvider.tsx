"use client";

import React, { useState, useEffect, createContext, useContext } from "react";

const MobileMenuContext = createContext<{
  isMobileMenuOpen: boolean;
  setMobileMenuOpen: (isOpen: boolean) => void;
}>({
  isMobileMenuOpen: false,
  setMobileMenuOpen: () => {},
});

export const useMobileMenu = () => useContext(MobileMenuContext);

const MobileMenuProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isMobileMenuOpen) {
      body.classList.add("mobileMenuIsOpen");
    } else {
      body.classList.remove("mobileMenuIsOpen");
    }
  }, [isMobileMenuOpen]);

  return (
    <MobileMenuContext.Provider value={{ isMobileMenuOpen, setMobileMenuOpen }}>
      {children}
    </MobileMenuContext.Provider>
  );
};

export default MobileMenuProvider;
