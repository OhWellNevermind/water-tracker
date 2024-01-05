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

export const TodayWaterList = () => {
  return (
    <TodayWaterListContainer>
      <Today>Today</Today>
      <TodayWrap>
        <List>
          <SublistAll>
            <Sublist>
              <GlassSpan>
                <Glass width={26} height={26} stroke={"#407BFF"} />
              </GlassSpan>
              <MLSpan>
                <NumberMl>{200} ml</NumberMl>
              </MLSpan>
              <Time>{"14-00"}</Time>
            </Sublist>
            <PencilAndBasket>
              <Pencil>
                <PencilSquare width={16} height={16} stroke={"#9EBBFF"} />
              </Pencil>
              <Basket>
                <Trash width={16} height={16} stroke={"#EF5050"} />
              </Basket>
            </PencilAndBasket>
          </SublistAll>

          <SublistAll>
            <Sublist>
              <GlassSpan>
                <Glass width={26} height={26} stroke={"#407BFF"} />
              </GlassSpan>
              <MLSpan>
                <NumberMl>{200} ml</NumberMl>
              </MLSpan>
              <Time>{"14-00"}</Time>
            </Sublist>
            <PencilAndBasket>
              <Pencil>
                <PencilSquare width={16} height={16} stroke={"#9EBBFF"} />
              </Pencil>
              <Basket>
                <Trash width={16} height={16} stroke={"#EF5050"} />
              </Basket>
            </PencilAndBasket>
          </SublistAll>
          <SublistAll>
            <Sublist>
              <GlassSpan>
                <Glass width={26} height={26} stroke={"#407BFF"} />
              </GlassSpan>
              <MLSpan>
                <NumberMl>{200} ml</NumberMl>
              </MLSpan>
              <Time>{"14-00"}</Time>
            </Sublist>
            <PencilAndBasket>
              <Pencil>
                <PencilSquare width={16} height={16} stroke={"#9EBBFF"} />
              </Pencil>
              <Basket>
                <Trash width={16} height={16} stroke={"#EF5050"} />
              </Basket>
            </PencilAndBasket>
          </SublistAll>
          <SublistAll>
            <Sublist>
              <GlassSpan>
                <Glass width={26} height={26} stroke={"#407BFF"} />
              </GlassSpan>
              <MLSpan>
                <NumberMl>{200} ml</NumberMl>
              </MLSpan>
              <Time>{"14-00"}</Time>
            </Sublist>
            <PencilAndBasket>
              <Pencil>
                <PencilSquare width={16} height={16} stroke={"#9EBBFF"} />
              </Pencil>
              <Basket>
                <Trash width={16} height={16} stroke={"#EF5050"} />
              </Basket>
            </PencilAndBasket>
          </SublistAll>
        </List>
        <Button type="submit">
          <PlusSmall width={16} height={16} stroke={"#407BFF"} />
          <AddWaterButton>Add water</AddWaterButton>
        </Button>
      </TodayWrap>
    </TodayWaterListContainer>
  );
};
