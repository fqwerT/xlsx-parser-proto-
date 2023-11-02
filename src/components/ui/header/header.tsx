import React from "react";
import { StyledHeader } from "./style";
//@ts-ignore
import img from '../../../assets/img/logo.png'
export const Header:React.FC = () => {
  return (
    <StyledHeader>
      <img src={img}/>

      <div>profile</div>
    </StyledHeader>
  );
};
