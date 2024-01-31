import React from "react";
import { FileProps } from "../../interface/interface";
import * as S from "./style";
interface ListProps {
  data: FileProps[];
  prev: any;
  status: any;
}

export const FileList: React.FC<ListProps> = ({ data, prev, status }) => {
  console.log(status);
  return (
    <S.StyledListContainer>
      {data.map((item, index) => (
        <>
          <S.StyledListRow key={String(index)}>
            <div>
              <p>имя: </p>
              <S.StyledText onClick={() => prev(item)}>
                {item?.name}
              </S.StyledText>
            </div>
            <div>
              <p>размер: </p> <S.StyledText>{item?.size} байт</S.StyledText>
            </div>
          </S.StyledListRow>
          {status[index] && (
            <S.StyledStatus $success={status[index]?.success}>
              {status[index]?.status}
            </S.StyledStatus>
          )}
        </>
      ))}
    </S.StyledListContainer>
  );
};
