import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div>Toolbar</div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
