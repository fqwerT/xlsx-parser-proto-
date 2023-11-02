import React, { useState, useEffect, useRef, useMemo } from "react";
import { HotTable } from "@handsontable/react";
import { registerAllModules } from "handsontable/registry";
import "handsontable/dist/handsontable.full.min.css";
import { StyledDashboardWrap } from "../dashboard/style";
import { HyperFormula } from "hyperformula";
import { ExportBtn } from "../export/export";
import  "./style.css";
registerAllModules();

export const Table: React.FC = () => {
   const [width,setWidth] = useState(0)
   const [data, setData] = useState<string[] | number[]>([
    "Обновить",
    "Типовые шкафы",
    "118.290 нов",
    "Гильза опрессуемая с изоляцией DI 0 5-8 GPH",
    "да",
    "F",
    "5",
    "10",
    "42",
    "21",
    "13",
    "3,00",
    "18.09.2023",
    "",
    "17.12.23",
    "1,3",
    "1,3",
    "1 251,5",
    "1 251,5",
    "коэф по письму Гресько",
    "0,65",
    "КОМПАНИЯ АЙСИЭС ООО ",
    "DI 0,5-8",
    "1,58",
    "1,58",
    "1,00 ",
    "руб",
    "шт",
    "1,00",
    "да",
    "нет",
    "Посадских, Гресько Роман Славович",
    "Игорь Ахматов <igor.akhmatov@dowire.ru>",
    "",
  ]);
  const hotRef = useRef(null);
  const hyperformulaInstance = HyperFormula.buildEmpty({
    licenseKey: "internal-use-in-handsontable",
  });

  return (
    <StyledDashboardWrap>
      <HotTable
        ref={hotRef}
        data={[data]}
        colHeaders={[
          "Запрос на обновление",
          "ТИП",
          "Артикул",
          "Наименование",
          "Доступно",
          "FMRS",
          "Avg_20-21",
          "2021",
          "2020",
          "2019",
          "2018",
          "Частота обновления",
          "мес	Последнее обновление",
          "ДЕЙСТВИЕ",
          "Срок действия цен",
          "Цена без НДС",
          "Цена без НДС за шт.",
          "Цена без НДС за шт. руб",
          "Цена без НДС с учетом UM",
          "Примечаниe",
          "Цена за ед без НДС, руб c UM",
          "Поставщик",
          "Артикул поставщика",
          "Цена РУБ без НДС",
          "Цена в валюте без НДС",
          "КУРС",
          "Валюта",
          "Ед",
          "Кол-во в упак шт.",
          "учет НДС",
          "учет UPSTR",
          "Ответственный",
          "Контактное лицо от поставщика",
          "CHECKER",
        ]}
        formulas={{
          engine: hyperformulaInstance,
        }}
        rowHeaders={true}
        manualColumnMove={true}
        copyPaste={true}
        height="100%"
        width="100%"
        licenseKey="non-commercial-and-evaluation"
        filters={true}
        // enable the column menu
        dropdownMenu={true}
      />
      <ExportBtn table={hotRef}/>
    </StyledDashboardWrap>
  );
};
