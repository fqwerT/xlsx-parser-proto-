import React from "react";
import { StyledDashboardWrap } from "../dashboard/style";
import { Link } from "react-router-dom";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setName, setTable } from "../../store/table/table";
import { FileUploader } from "../fileuploader/fileuploader";
import { StyledButton } from "../ui/button/button";
export const TablesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const testingTable = () => {
    dispatch(
      setTable([
        {
          ID: 1,
          Months: "January",
          ListMonths: "January",
          __EMPTY_3: "Select Month",
        },

        {
          ID: 2,
          Months: "February",
          ListMonths: "February",
          __EMPTY_3: "August",
        },
        { 
          ID: 3, 
          Months: "March", 
          ListMonths: "March" 
        },
        {
          ID: 4,
          Months: "April",
          ListMonths: "April",
        },
        {
          ID: "",
          ListMonths: "June",
        },
        {
          ID: 5,
          Months: "June",
          ListMonths: "July",
        },
        {
          ID: 6,
          Months: "July",
          ListMonths: "August",
        },
        {
          ID: 7,
          Months: "August",
          ListMonths: "October",
        },
        {
          ID: "",
          ListMonths: "December",
        },
        {
          ID: 8,
          Months: "October",
          ListMonths: "",
        },
        {
          ID: "",
          ListMonths: "",
        },
        {
          ID: 9,
          Months: "December",
          ListMonths: "",
        },
      ])
    );
    dispatch(setName("фывфыв"));
    navigate("/table");
  };

  return (
    <StyledDashboardWrap>
      <S.StyledTablesHeader>
        {/* <StyledButton onClick={() => navigate("/create")}>Создать</StyledButton> */}
        <FileUploader />
      </S.StyledTablesHeader>
      <S.StyledTsblesMenu>
        <h1>Таблицы</h1>
        <S.StyledTablesList>
          <div onClick={() => testingTable()}>
            <h3>Тестовая таблица</h3>
            <p>01.11.2023</p>
          </div>
        </S.StyledTablesList>
      </S.StyledTsblesMenu>
    </StyledDashboardWrap>
  );
};
