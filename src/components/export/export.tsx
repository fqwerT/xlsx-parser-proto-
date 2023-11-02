import React,{useEffect,useRef} from "react";
import { utils,writeFile } from "xlsx";
interface IExport {
    table:any
}

export const ExportBtn: React.FC<IExport> = ({ table }) => {
  useEffect(() => {
    let buttonClickCallback = () => {
      const hot = table.current.hotInstance;
      const data = hot.getData();
      const sheet = utils.json_to_sheet(data);
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
      <button id="export-file">Download CSV</button>
    </div>
  );
};