import {
  TodayWaterListContainer,
  Today,
  TodayWrap,
  List,
  SublistAll,
  Sublist,
  GlassSpan,
  MLSpan,
  NumberMl,
  Time,
  PencilAndBasket,
  Basket,
  Pencil,
  Button,
  AddWaterButton,
} from "./TodayWaterList.styled";
import { Glass } from "../../../../components/icons/Glass";
import { PencilSquare } from "../../../../components/icons/PencilSquare";
import { Trash } from "../../../../components/icons/Trash";
import { PlusSmall } from "../../../../components/icons/PlusSmall";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTodayTracker } from "../../../../redux/waterTracker/operations";
import { selectWaterTodayTracker } from "../../../../redux/waterTracker/selectors";
import dayjs from "dayjs";
import { setTodayWaterData } from "../../../../redux/waterTracker/slice";

export const TodayWaterList = ({ setModalName }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const date = dayjs().format("YYYY-MM-DD");
    dispatch(getTodayTracker(date));
  }, [dispatch]);

  const waterTracks = useSelector(selectWaterTodayTracker);

  if (!waterTracks) {
    return null;
  }

  const compareDates = (a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);

    return dateA - dateB;
  };

  const sortedWaterTracks = [...waterTracks].sort(compareDates).reverse();

  return (
    <TodayWaterListContainer>
      <Today>Today</Today>
      <TodayWrap>
        <List>
          {sortedWaterTracks?.map((item) => {
            return (
              <SublistAll key={item.id}>
                <Sublist>
                  <GlassSpan>
                    <Glass width={26} height={26} stroke={"#407BFF"} />
                  </GlassSpan>
                  <MLSpan>
                    <NumberMl>{item.amountWater} ml</NumberMl>
                  </MLSpan>
                  <Time>
                    {item.date.split("T")[1].split(":").slice(0, 2).join(":")}
                  </Time>
                </Sublist>
                <PencilAndBasket>
                  <Pencil
                    onClick={() => {
                      dispatch(
                        setTodayWaterData({
                          amountWater: item.amountWater,
                          date: item.date,
                          id: item.id,
                        })
                      );
                      setModalName("todayList");
                    }}
                    type="button"
                  >
                    <PencilSquare width={16} height={16} stroke={"#9EBBFF"} />
                  </Pencil>
                  <Basket onClick={() => setModalName("delete")} type="button">
                    <Trash width={16} height={16} stroke={"#EF5050"} />
                  </Basket>
                </PencilAndBasket>
              </SublistAll>
            );
          })}
        </List>
        <Button onClick={() => setModalName("addWater")} type="button">
          <PlusSmall width={16} height={16} stroke={"#407BFF"} />
          <AddWaterButton>Add water</AddWaterButton>
        </Button>
      </TodayWrap>
    </TodayWaterListContainer>
  );
};
