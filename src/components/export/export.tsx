import React,{useEffect,useRef} from "react";
import { utils,writeFile } from "xlsx";
interface IExport {
    table:any,
    headers:string[] | number[] 
}

export const ExportBtn: React.FC<IExport> = ({ table,headers }) => {
  useEffect(() => {
    let buttonClickCallback = () => {
      const hot = table.current.hotInstance;
  
      const data = hot.getData();
      const sheetData = [];
      sheetData.push(...data); // добавляем данные таблицы в массив данных
      const sheet = utils.aoa_to_sheet(sheetData);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, sheet, 'Sheet1');
      writeFile(workbook, 'test_[YYYY]-[MM]-[DD].xlsx');
    };

    const exportBtn = document.getElementById("export-file");
    exportBtn.addEventListener("click", buttonClickCallback);
    
    return () => {
      exportBtn.removeEventListener("click", buttonClickCallback);
    };
  }, [table]);

  return (
    <div>
      <button id="export-file">Скачать таблицу</button>
    </div>
  );
};