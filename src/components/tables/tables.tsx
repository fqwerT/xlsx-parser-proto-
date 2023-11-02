import React from "react";
import { StyledDashboardWrap } from "../dashboard/style";
import { StyledTablesList } from "./style";
import {Link} from 'react-router-dom'
import { StyledButtons } from "./style";
import { useNavigate } from "react-router-dom";
export const TablesList: React.FC = () => {

 const navigate = useNavigate()

  return (
    <StyledDashboardWrap>
       <h1>Таблицы</h1>
       <StyledButtons onClick={()=>navigate('/create')}>Создать таблицу</StyledButtons>
      <StyledTablesList>
        <Link to='/table'><h3>Тестовая таблица</h3><p>01.11.2023</p></Link>
      </StyledTablesList>
    </StyledDashboardWrap>
  );
};
