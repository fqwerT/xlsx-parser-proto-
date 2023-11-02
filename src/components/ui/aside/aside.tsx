import React from "react";
import { StyledSideBar, StyledLinksWrapper } from "./style";
import { Link } from "react-router-dom";
import { StyledSideIcons } from "./style";
//@ts-ignore
import tableicon from "../../../assets/img/table.svg";
//@ts-ignore
import archiveicon from "../../../assets/img/archive.svg";
//@ts-ignore
import homeicon from "../../../assets/img/home.svg";

export const Aside: React.FC = () => {
  return (
    <StyledSideBar>
      <StyledLinksWrapper>
        <Link to="/">
          <StyledSideIcons src={homeicon} />
        </Link>
        <Link to="/">
          <StyledSideIcons src={archiveicon} />
        </Link>
        <Link to="/tables">
          <StyledSideIcons src={tableicon} />
        </Link>
      </StyledLinksWrapper>
    </StyledSideBar>
  );
};
