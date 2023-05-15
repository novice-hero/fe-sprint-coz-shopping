import styled from "styled-components";
import Bookmark from "./Bookmark";
import Modal from "./Modal";
import { useDispatch, useSelector } from "react-redux";
import { modalActions } from "../../store/ModalSlice";

export default function Card({ data }) {
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.modal.check);

  const url = data.image_url ? data.image_url : data.brand_image_url;

  let content = "";
  if (data.type === "Category") content = <div>{`# ${data.title}`}</div>;
  else if (data.type === "Brand") content = <div>{data.brand_name}</div>;
  else content = <div>{data.title}</div>;

  return (
    <>
      {modalState && <Modal />}
      <Item>
        <ItemImage
          src={url}
          alt={data.title}
          onClick={() => {
            dispatch(modalActions.add(data));
          }}
        />
        <Bookmark data={data} />

        <FirstDiv>
          {/* 왼쪽 섹션 */}
          {content}
          {/* 오른쪽 섹션 */}
          {data.type === "Brand" && <div>관심고객수</div>}
          {data.discountPercentage && (
            <Discount>{`${data.discountPercentage}%`}</Discount>
          )}
        </FirstDiv>

        {data.sub_title && <SecondDivLeft>{data.sub_title}</SecondDivLeft>}
        {data.price && <SecondDivRight>{`${data.price}원`}</SecondDivRight>}
        {data.follower && <SecondDivRight>{data.follower}</SecondDivRight>}
      </Item>
    </>
  );
}

const Item = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 264px;
  height: 264px;
`;

const ItemImage = styled.img`
  box-sizing: border-box;
  width: 264px;
  height: 210px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 12px;
  cursor: pointer;
`;

const FirstDiv = styled.div`
  margin-top: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 800;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const SecondDivLeft = styled.div`
  margin-top: 4px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const SecondDivRight = styled(SecondDivLeft)`
  justify-content: flex-end;
`;

const Discount = styled.span`
  color: #452cdd;
`;
