import React, { useEffect, useState, useMemo } from "react";
import { StyledDashboardWrap } from "../dashboard/style";
import {
  StyledCellsList,
  StyledTableCellOptions,
  StyledButtonOpenTools,
  StyledInputName,
  StyledFormulaTool,
  StyledTableDemo,
} from "./style";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import { HyperFormula } from "hyperformula";
registerAllModules();

export const CreateTable: React.FC = () => {
  const [data, setData] = useState<any[]>([]);
  const [selected, setSelected] = useState<string | null>(null);

  const handleCellClick = (id: string) => {
    setSelected(id);
  };

  const handleCellValueChange = (id: string, newValue: string) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, title: newValue };
        }
        return item;
      })
    );
  };

  const handleCellContentChange = (id: string, newValue: string) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, content: newValue };
        }
        return item;
      })
    );
  };

  const hyperformulaInstance = HyperFormula.buildEmpty({
    licenseKey: "internal-use-in-handsontable",
  });

  const createCell = () => {
    const newId = Math.random().toString();
    setData((prevData) => [
      ...prevData,
      {
        title: `столбец ${prevData.length + 1}`,
        id: newId,
        isOpen: false,
        content: "",
      },
    ]);
    setSelected(newId);
  };

  const openTools = (id: string | number) => {
    setData((prevData) =>
      prevData.map((item) => {
        if (item.id === id) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      })
    );
  };
  //@ts-ignore
  const dataColumn = useMemo(() => {
    let arr = [];
    data.map((i) => {
      arr.push(i.content);
    });
    return arr;
  }, [data]);

  const headerColumn = useMemo(() => {
    let arr = [];
    data.map((i) => {
      arr.push(i.title);
    });
    return arr;
  }, [data]);

  return (
    <StyledDashboardWrap>
      <button onClick={createCell}>Добавить столбец</button>
      <StyledCellsList id="cellswrap">
        {data.map((item) => (
          <StyledTableCellOptions key={item.id} isOpen={item.isOpen}>
            <div style={{ display: "flex" }}>
              <StyledInputName
                isOpen={item.isOpen}
                value={item.title}
                onChange={(e) => handleCellValueChange(item.id, e.target.value)}
                onFocus={() => handleCellClick(item.id)}
              />
              <StyledButtonOpenTools onClick={() => openTools(item.id)}>
                ∨
              </StyledButtonOpenTools>
            </div>
            <StyledFormulaTool isOpen={item.isOpen}>
              <input
                placeholder="значение"
                onChange={(e) =>
                  handleCellContentChange(item.id, e.target.value)
                }
                onFocus={() => handleCellClick(item.id)}
              />
              <p>Значение ячейки в столбце ,можно указать формулу</p>
            </StyledFormulaTool>
          </StyledTableCellOptions>
        ))}
      </StyledCellsList>
      <StyledTableDemo>
        {data.length !== 0 && (
          <>
            <h1>Предпросмотр</h1>
            <HotTable
              data={[dataColumn]}
              //@ts-ignore
              colHeaders={headerColumn}
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
      </StyledTableDemo>
    </StyledDashboardWrap>
  );
};
