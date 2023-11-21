import React, { useState } from "react";
import { read as readXLSX, utils } from "xlsx";
import { useDropzone } from "react-dropzone";
import { useDispatch } from "react-redux";
import { setTable } from "../../store/table/table";
import { useNavigate } from "react-router";

export const FileUploader = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onDrop = (acceptedFiles) => {
    handleFile(acceptedFiles[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const bstr = e.target.result as string;
      const workbook = readXLSX(bstr, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const jsonData = utils.sheet_to_json(sheet, { header: 1 });
      dispatch(setTable(jsonData));
      console.log(jsonData)
      navigate("/table");
    };
    reader.readAsBinaryString(file);
  };

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
    </div>
  );
};
