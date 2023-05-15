import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { bookmarkActions } from "../../store/bookmarkSlice";
import { useEffect } from "react";

export default function Bookmark({ data }) {
  const bookmark = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  const isBookmark =
    bookmark.length !== 0 && bookmark.some((v) => v.id === data.id);

  const saveBookmark = () => {
    dispatch(bookmarkActions.add(data));
  };

  const removeBookmark = (id) => {
    dispatch(bookmarkActions.remove(id));
  };

  useEffect(() => {
    if (bookmark.length === 0) return;
    localStorage.setItem("bookmark", JSON.stringify(bookmark));
  }, [bookmark]);

  return isBookmark ? (
    <BookmarkButton onClick={() => removeBookmark(data.id)}>
      <AiFillStar size={24} color="yellow" />
    </BookmarkButton>
  ) : (
    <BookmarkButton onClick={saveBookmark}>
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
