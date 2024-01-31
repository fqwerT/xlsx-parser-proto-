import React, { useCallback, useState, useMemo } from "react";
import { AsyncUploadFiles, removeDuplicates } from "./utils";
import { FileList } from "../filesList/fileList";
import { FileProps } from "../../interface/interface";
import { useAppDispatch } from "../../store/hooks";
import * as S from "./style";
import { setTable } from "../../store/table/table";

export const FileUploader: React.FC = (): React.JSX.Element => {
  const [files, setFiles] = useState<FileProps[]>([]);
  const [status, setStatus] = useState<any>([]);
  const dispatch = useAppDispatch();

  const uploadFile = useCallback((e) => {
    if (e.target.files[0]) {
      setFiles((prev) => [...prev, e.target.files[0]]);
    }
  }, []);

  const sendFile = useCallback(() => {
    
    AsyncUploadFiles(files, setStatus,status);
  }, [files,status]);

  const handlePreview = (item) => {
    dispatch(setTable(item));
  };

  const filteredFiles = useMemo(() => {
    return removeDuplicates(files);
  }, [files]);
  


  return (
    <S.StyledUploader>
      <input type="file" onChange={uploadFile} />
      {files.length > 0 && (
        <>
          <FileList data={filteredFiles} prev={handlePreview} status={status} />
          <button onClick={() => sendFile()}>сохранить</button>
          <button>закрыть</button>
        </>
      )}
    </S.StyledUploader>
  );
};
