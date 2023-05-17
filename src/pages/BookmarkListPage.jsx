import { useCallback, useEffect, useState } from "react";
import TabList from "../components/TabList";
import ItemList from "../components/ItemList";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "../store/ProductListSlice";

export default function BookmarkListPage() {
  const filteredItem = useSelector((state) => state.productList.items);
  const filteredType = useSelector((state) => state.productList.currentType);
  const viewLimit = useSelector((state) => state.productList.limit);
  const page = useSelector((state) => state.productList.page);
  const endPage = useSelector((state) => state.productList.endPage);
  const inview = useSelector((state) => state.productList.inview);
  const bookmarkItem = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  const [item, setItem] = useState([]);

  useEffect(() => {
    dispatch(productListActions.clearItems());

    if (filteredType === "All") {
      dispatch(productListActions.addItems(bookmarkItem));
      dispatch(
        productListActions.setEndPage(
          Math.ceil(bookmarkItem.length / viewLimit)
        )
      );
    } else {
      dispatch(
        productListActions.addItems(
          bookmarkItem.filter((v) => v.type === filteredType)
        )
      );
      dispatch(
        productListActions.setEndPage(
          Math.ceil(filteredItem.length / viewLimit)
        )
      );
    }
    setItem([]);
    dispatch(productListActions.resetPage());
  }, [filteredType, bookmarkItem]);
  // 의존성 배열에 bookmarkItem을 넣으면 리렌더링이 되므로 오류가 터지는 것 같음
  // 빼면 오류는 안나지만 북마크 제거한 것이 즉시 반영이 안되고, 새로고침을 해야 적용됨. 하지만 오류는 나지 않음.

  useEffect(() => {
    if (inview) {
      dispatch(productListActions.increasePage());
    }
  }, [inview]);

  const getItems = useCallback(() => {
    page < endPage &&
      setItem((prev) =>
        prev.concat(
          filteredItem.slice(page * viewLimit, page * viewLimit + viewLimit)
        )
      );
  }, [page, endPage, filteredItem, viewLimit]);

  useEffect(() => {
    getItems();
  }, [getItems]);

  return (
    <Wrapper>
      <MainContainer>
        <TabList />
        <ItemList data={item} />
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MainContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 12px;

  width: 66rem;
`;
