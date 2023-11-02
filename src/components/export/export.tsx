import React,{useEffect,useRef} from "react";

interface IExport {
    table:any
}

export const ExportBtn:React.FC<IExport> = ({table}) => {

  

    let buttonClickCallback;
  
    useEffect(() => {
      const hot = table.current.hotInstance;
  
      const exportPlugin = hot.getPlugin('exportFile');
      buttonClickCallback = () => {
        exportPlugin.downloadFile('csv', {
          bom: false,
          columnDelimiter: ',',
          columnHeaders: false,
          exportHiddenColumns: true,
          exportHiddenRows: true,
          fileExtension: 'csv',
          filename: 'test_[YYYY]-[MM]-[DD]',
          mimeType: 'text/csv',
          rowDelimiter: '\r\n',
          rowHeaders: true
        });
      };
    });
  

    return(
        <div>
            <button id="export-file" onClick={(...args) => buttonClickCallback(...args)}>Download CSV</button>
        </div>
    )
}