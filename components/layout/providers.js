import React from "react";
import Header from "./header";

export default function Providers({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
