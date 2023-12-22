import React, { useCallback, useState } from "react";
import { AsyncUploadFiles } from "./utils";
import { FileList } from "../filesList/fileList";
import { FileProps } from "../../interface/interface";
import * as S from './style'

export const FileUploader: React.FC = (): React.JSX.Element => {
  const [files, setFiles] = useState<FileProps[]>([]);

  const uploadFile = useCallback((e) => {
    if (e.target.files[0]) {
      setFiles((prev) => [...prev, e.target.files[0]]);
    }
  }, []);

  const sendFile = useCallback(() => {
    AsyncUploadFiles(files);
  }, [files]);

  return (
    <S.StyledUploader>
      <input type="file" onChange={uploadFile} />
      <FileList data={files} />
      <button onClick={() => sendFile()}>сохранить</button>
      <button>отмена</button>
    </S.StyledUploader>
  );
};
