import React from "react";
import { Header } from "../components/ui/header/header";
import { Outlet } from "react-router-dom";
import { Aside } from "../components/ui/aside/aside";
import { StyledWrap } from "./style";
export const Layout: React.FC = () => {
  return (
    <>
      <Header />
      <StyledWrap>
        <Aside />
        <Outlet />
      </StyledWrap>
    </>
  );
};
