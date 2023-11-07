import React, { useState } from "react";
import { read as readXLSX, utils } from "xlsx";
import { useDropzone } from "react-dropzone";

export const FileUploader = () => {
  const [data, setData] = useState(null);

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const bstr = e.target.result as string;
      const workbook = readXLSX(bstr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = utils.sheet_to_json(sheet, { header: 1 });
      setData(jsonData);
    };

    reader.readAsBinaryString(file);
  };

  const onDrop = (acceptedFiles) => {
    handleFile(acceptedFiles[0]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Перетащите файл сюда...</p>
      ) : (
        <p>Перетащите файл сюда или кликните, чтобы выбрать файл</p>
      )}
      {data && (
        <div className="data-preview">
          <h3>Данные из файла:</h3>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};
