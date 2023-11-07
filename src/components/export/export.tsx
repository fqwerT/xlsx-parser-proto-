import React,{useEffect,useRef} from "react";
import { useAppSelector } from "../../store/hooks";
import { utils,writeFile } from "xlsx";
interface IExport {
    reftable:any,
}

export const ExportBtn: React.FC<IExport> = ({ reftable }) => {
  const table = useAppSelector((state) => state.table.name);
  useEffect(() => {
    let buttonClickCallback = () => {
      const hot = reftable.current.hotInstance;
  
      const data = hot.getData();
      const sheetData = [];
      sheetData.push(...data); // добавляем данные таблицы в массив данных
      const sheet = utils.aoa_to_sheet(sheetData);
      const workbook = utils.book_new();
      utils.book_append_sheet(workbook, sheet, 'Sheet1');
      writeFile(workbook, `${table}.xlsx`);
    };

    const exportBtn = document.getElementById("export-file");
    exportBtn.addEventListener("click", buttonClickCallback);
    
    return () => {
      exportBtn.removeEventListener("click", buttonClickCallback);
    };
  }, [reftable]);

  return (
    <div>
      <button id="export-file">Скачать таблицу</button>
    </div>
  );
};