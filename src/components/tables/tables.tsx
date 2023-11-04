import React from "react";
import { StyledDashboardWrap } from "../dashboard/style";

import {Link} from 'react-router-dom'
import * as S from "./style";
import { useNavigate } from "react-router-dom";
export const TablesList: React.FC = () => {

 const navigate = useNavigate()

  return (
    <StyledDashboardWrap>
      <S.StyledTsblesMenu>
      <h1>Таблицы</h1>
       <S.StyledButtons onClick={()=>navigate('/create')}>Создать таблицу</S.StyledButtons>
      <S.StyledTablesList>
        <Link to='/table'><h3>Тестовая таблица</h3><p>01.11.2023</p></Link>
      </S.StyledTablesList>
      </S.StyledTsblesMenu>
    </StyledDashboardWrap>
  );
};
