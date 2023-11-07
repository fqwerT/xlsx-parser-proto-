import React from "react";
import { StyledDashboardWrap } from "./style";
import { FileUploader } from "../fileuploader/fileuploader";

export const Dashboard: React.FC = () => {
  return (
    <StyledDashboardWrap>
       <FileUploader/>
    </StyledDashboardWrap>
  );
};
