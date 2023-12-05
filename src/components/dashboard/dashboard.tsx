import React from "react";
import {
  StyledAvailbibleChanges,
  StyledDashboardWrap,
  StyledLatestChanges,
} from "./style";
import { FileUploader } from "../fileuploader/fileuploader";

export const Dashboard: React.FC = () => {
  return (
    <StyledDashboardWrap>
      <FileUploader />
      <StyledAvailbibleChanges>
        <h1>Доступные Изменения</h1>
        <p>тестовая таблица 11.11.23</p>
      </StyledAvailbibleChanges>
      <StyledLatestChanges>
        <h1>Последние изменения</h1>
        <p>тестовая таблица 11.11.23</p>
      </StyledLatestChanges>
    </StyledDashboardWrap>
  );
};
