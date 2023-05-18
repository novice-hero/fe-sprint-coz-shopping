import { useEffect, useState, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { tabActions } from "../store/tabSlice";

import TabList from "../components/TabList";
import ItemList from "../components/ItemList";
import styled from "styled-components";

export default function BookmarkListPage() {
  const filteredType = useSelector((state) => state.tab.currentType);
  const inview = useSelector((state) => state.productList.inview);
  const bookmarkItem = useSelector((state) => state.bookmark);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  // useMemo
  const filteredItem = useMemo(() => {
    if (filteredType === "All") {
      return bookmarkItem;
    } else return bookmarkItem.filter((item) => item.type === filteredType);
  }, [filteredType, bookmarkItem]);

  useEffect(() => {
    dispatch(tabActions.reset());
  }, []);

  useEffect(() => {
    if (inview) setPage((prev) => prev + 1);
  }, [inview]);

  return (
    <Wrapper>
      <MainContainer>
        <TabList />
        <ItemList data={filteredItem.slice(0, page * 12)} />
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

  width: 70.5rem;
`;
