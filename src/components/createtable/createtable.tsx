import React, { useState, useMemo, useCallback } from "react";
import { StyledDashboardWrap } from "../dashboard/style";
import * as S from "./style";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import { HyperFormula } from "hyperformula";
import { SelectInput } from "../selectinput/Selectinput";
import { changeCell, createCell, adapterData } from "./utils";
registerAllModules();

export const CreateTable: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const handleCellClick = useCallback((id: string) => {
    setSelected(id);
  }, []);

  const changeCellValue = useCallback(
    (
      id: string | number,
      title: string | null,
      content: string | number | null,
      isOpen: boolean = false
    ) => {
      changeCell(id, title, content, isOpen, setData);
    },
    [data]
  );

  const hyperformulaInstance = HyperFormula.buildEmpty({
    licenseKey: "internal-use-in-handsontable",
  });

  //@ts-ignore
  const dataMemo = useMemo(() => {
  return adapterData(data)
  }, [data]);

  return (
    <StyledDashboardWrap>
      <button onClick={() => createCell(setData, setSelected)}>
        Добавить столбец
      </button>
      <S.StyledCellsList id="cellswrap">
        {data.map((item) => (
          <SelectInput
            changeCellValue={changeCellValue}
            handleCellClick={handleCellClick}
            item={item}
          />
        ))}
      </S.StyledCellsList>
      <S.StyledTableDemo>
        {data.length !== 0 && (
          <>
            <h1>Предпросмотр</h1>
            <HotTable
              data={[dataMemo.listColumn]}
              //@ts-ignore
              colHeaders={dataMemo.listHeader}
              rowHeaders={true}
              copyPaste={true}
              height="100%"
              width="100%"
              licenseKey="non-commercial-and-evaluation"
              formulas={{
                engine: hyperformulaInstance,
              }}
            />
          </>
        )}
      </S.StyledTableDemo>
    </StyledDashboardWrap>
  );
};
