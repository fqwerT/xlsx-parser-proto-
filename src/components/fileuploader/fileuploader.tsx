import React, { useCallback,useEffect,useState } from "react";
//import { read as readXLSX, utils } from "xlsx";
import { useDropzone } from "react-dropzone";
import { setTable } from "../../store/table/table";
import { workerScript } from "../../worker/worker";
import { useNavigate } from "react-router";
import { useAppDispatch } from "../../store/hooks";
import { StyledButton } from "../ui/button/button";
import { loadFile } from "./utils";
import { read as readXLSX, utils } from "xlsx";

export const FileUploader: React.FC = (): React.JSX.Element => {
  const worker = new Worker(workerScript)
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [loaded,setLoaded] = useState<any>()

  const onDrop = (acceptedFiles) => {
    handleFile(acceptedFiles[0]);
  };
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  useEffect(() => {
    worker.addEventListener("message", (e) => {

    console.log(e.data)

    });
  }, []);

  const handleFile = useCallback((file) => {
    worker.postMessage(file)
  }, []);

  return (
    <div
      {...getRootProps()}
      className={`dropzone ${isDragActive ? "active" : ""}`}
    >
      <input {...getInputProps()} />
      {isDragActive ? (
        <p>Перетащите файл сюда...</p>
      ) : (
        <StyledButton>Импортировать </StyledButton>
      )}
    </div>
  );
};
