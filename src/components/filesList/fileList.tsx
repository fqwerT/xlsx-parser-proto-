import React from "react";
import { FileProps } from "../../interface/interface";
import * as S from "./style";
interface ListProps {
  data: FileProps[];
}

export const FileList: React.FC<ListProps> = ({ data }) => {
  return (
    <S.StyledListContainer>
      {data.map((item, index) => (
        <S.StyledListRow key={String(index)}>
          <div>
            <p>имя: </p>
            <S.StyledText>{item?.name}</S.StyledText>
          </div>
          <div>
            <p>размер: </p> <S.StyledText>{item?.size} байт</S.StyledText>
          </div>
        </S.StyledListRow>
      ))}
    </S.StyledListContainer>
  );
};
