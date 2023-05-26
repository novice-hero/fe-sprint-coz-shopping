import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Bookmark from "./Bookmark";
import { AiOutlineClose } from "react-icons/ai";
import { modalActions } from "../store/ModalSlice";

export default function Modal() {
  const modalData = useSelector((state) => state.modal.item);
  const dispatch = useDispatch();

  const url = modalData.image_url
    ? modalData.image_url
    : modalData.brand_image_url;

  let content = "";
  if (modalData.type === "Category")
    content = <div>{`# ${modalData.title}`}</div>;
  else if (modalData.type === "Brand")
    content = <div>{modalData.brand_name}</div>;
  else content = <div>{modalData.title}</div>;

  return (
    <Backdrop onClick={() => dispatch(modalActions.remove())}>
      <ModalContent>
        <ItemImage src={url} alt={modalData.title} />
        <BookmarkButton>
          <Bookmark data={modalData} />
        </BookmarkButton>
        <ModalTitle>{content}</ModalTitle>
        <CloseButton onClick={() => dispatch(modalActions.remove())}>
          <AiOutlineClose size={24} color="#f0f0f0" />
        </CloseButton>
      </ModalContent>
    </Backdrop>
  );
}

const Backdrop = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
`;

const ModalContent = styled.div`
  position: relative;
  border-radius: 12px;
`;

const ItemImage = styled.img`
  box-sizing: border-box;
  width: 744px;
  height: 480px;
  border-radius: 12px;
`;

const ModalTitle = styled.div`
  position: absolute;
  left: 5%;
  top: 90%;

  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;

  color: #ffffff;

  text-shadow: 0px 0px 4px rgba(0, 0, 0, 0.435);
  display: flex;
  align-items: center;
`;

const BookmarkButton = styled.div`
  position: absolute;
  left: 1.5%;
  top: 90%;
  cursor: pointer;
`;

const CloseButton = styled.button`
  all: unset;
  position: absolute;
  left: 93.55%;
  right: 3.23%;
  top: 5%;
  bottom: 90%;
  cursor: pointer;
`;
