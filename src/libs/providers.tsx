"use client";
import { ReactNode } from "react";
import { NextUIProvider } from "@nextui-org/system";

export const Providers: React.FC<{ children: ReactNode }> = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};
