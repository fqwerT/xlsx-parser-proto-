import React from "react";
import { StyledDashboardWrap } from "../dashboard/style";
import { Link } from "react-router-dom";
import * as S from "./style";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/hooks";
import { setName, setTable } from "../../store/table/table";
export const TablesList: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const testingTable = () => {
    dispatch(
      setTable([
        [
          "Обновить",
          "Типовые шкафы",
          "118.290 нов",
          "Гильза опрессуемая с изоляцией DI 0 5-8 GPH",
          "да",
          "F",
          "5",
          "10",
          "42",
          "21",
          "13",
          "3,00",
          "18.09.2023",
          "",
          "17.12.23",
          "1,3",
          "1,3",
          "1 251,5",
          "1 251,5",
          "коэф по письму Гресько",
          "0,65",
          "КОМПАНИЯ АЙСИЭС ООО ",
          "DI 0,5-8",
          "1,58",
          "1,58",
          "1,00 ",
          "руб",
          "шт",
          "1,00",
          "да",
          "нет",
          "Посадских, Гресько Роман Славович",
          "Игорь Ахматов <igor.akhmatov@dowire.ru>",
          "",
        ],
        [
          "Запрос на обновление",
          "ТИП",
          "Артикул",
          "Наименование",
          "Доступно",
          "FMRS",
          "Avg_20-21",
          "2021",
          "2020",
          "2019",
          "2018",
          "Частота обновления",
          "мес  Последнее обновление",
          "ДЕЙСТВИЕ",
          "Срок действия цен",
          "Цена без НДС",
          "Цена без НДС за шт.",
          "Цена без НДС за шт. руб",
          "Цена без НДС с учетом UM",
          "Примечаниe",
          "Цена за ед без НДС, руб c UM",
          "Поставщик",
          "Артикул поставщика",
          "Цена РУБ без НДС",
          "Цена в валюте без НДС",
          "КУРС",
          "Валюта",
          "Ед",
          "Кол-во в упак шт.",
          "учет НДС",
          "учет UPSTR",
          "Ответственный",
          "Контактное лицо от поставщика",
          "CHECKER",
        ],
      ])
    );
    dispatch(setName('фывфыв'))
    navigate('/table')
  };
  return (
    <StyledDashboardWrap>
      <S.StyledTsblesMenu>
        <h1>Таблицы</h1>
        <S.StyledButtons onClick={() => navigate('/create')}>
          Создать таблицу
        </S.StyledButtons>
        <S.StyledTablesList>
          <div onClick={() => testingTable()}>
            <h3>Тестовая таблица</h3>
            <p>01.11.2023</p>
          </div>
        </S.StyledTablesList>
      </S.StyledTsblesMenu>
    </StyledDashboardWrap>
  );
};
