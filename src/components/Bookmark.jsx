import { useDispatch, useSelector } from "react-redux";
import { AiFillStar } from "react-icons/ai";
import { bookmarkActions } from "../store/bookmarkSlice";
import { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

import styled from "styled-components";
import { toastActions } from "../store/toastSlice";

export default function Bookmark({ data }) {
  const bookmark = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  const isBookmark =
    bookmark.length !== 0 && bookmark.some((v) => v.id === data.id);

  useEffect(() => {
    if (bookmark.length === 0) return;
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  const handleToast = (delay, content) => {
    dispatch(
      toastActions.enQueue({
        id: uuidv4(),
        content,
      })
    );
    setTimeout(() => {
      dispatch(toastActions.deQueue());
    }, delay);
  };

  return isBookmark ? (
    <BookmarkButton
      onClick={() => {
        dispatch(bookmarkActions.remove(data.id));
        handleToast(3000, "🤍 상품이 북마크에서 제거되었습니다.");
      }}
    >
      <AiFillStar size={24} color="yellow" />
    </BookmarkButton>
  ) : (
    <BookmarkButton
      onClick={() => {
        dispatch(bookmarkActions.add(data));
        handleToast(3000, "❤️ 상품이 북마크에 추가되었습니다.");
      }}
    >
      <AiFillStar size={24} color="#d8d8d8" />
    </BookmarkButton>
  );
}

const BookmarkButton = styled.div`
  position: absolute;
  left: 88%;
  top: 68%;
  cursor: pointer;
`;
