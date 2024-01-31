import React, { useRef, useMemo, useEffect } from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import { StyledDashboardWrap } from "../dashboard/style";
import { HyperFormula } from "hyperformula";
import { ExportBtn } from "../export/export";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";
import { shallowEqual } from "react-redux";
import "./style.css";
import { dataClone } from "./utils";
import { useAppDispatch } from "../../store/hooks";
import { setTable } from "../../store/table/table";
registerAllModules();

export const Table: React.FC = (): React.JSX.Element => {
  const hotRef = useRef(null);
  const dispatch = useAppDispatch();
  const tableState = useAppSelector(
    (state: RootState) => state.table.data,
    shallowEqual
  );

  const hyperformulaInstance = HyperFormula.buildEmpty({
    licenseKey: "internal-use-in-handsontable",
  });

  useEffect(() => {
    function cleanUp() {
      dispatch(setTable([]));
    }
    return cleanUp;
  }, []);

  console.log(tableState);
  return (
    <StyledDashboardWrap>
      <HotTable
        ref={hotRef}
        data={tableState}
        colHeaders={true}
        formulas={{
          engine: hyperformulaInstance,
        }}
        rowHeaders={true}
        manualColumnMove={true}
        copyPaste={true}
        height="80%"
        width="100%"
        licenseKey="non-commercial-and-evaluation"
        filters={true}
        dropdownMenu={true}
        manualColumnResize={true}
      />
      <ExportBtn reftable={hotRef} />
    </StyledDashboardWrap>
  );
};
