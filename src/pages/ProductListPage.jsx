import { useEffect, useState, useMemo } from "react";
import TabList from "../components/TabList";
import cozShoppingApi from "../api/cozShoppingApi";
import ItemList from "../components/ItemList";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { tabActions } from "../store/tabSlice";
import { productListActions } from "../store/ProductListSlice";

export default function ProductListPage() {
  const filteredType = useSelector((state) => state.tab.currentType);
  const inview = useSelector((state) => state.productList.inview);
  const viewLimit = useSelector((state) => state.productList.viewLimit);
  const items = useSelector((state) => state.productList.items);
  const dispatch = useDispatch();

  const [page, setPage] = useState(1);

  const filteredItem = useMemo(() => {
    if (filteredType === "All") {
      return items;
    } else return items.filter((item) => item.type === filteredType);
  }, [filteredType, items]);

  useEffect(() => {
    dispatch(tabActions.reset());
  }, []);

  useEffect(() => {
    const fetchAllData = async () => {
      const data = await cozShoppingApi.getAllItem();
      dispatch(productListActions.updateItems(data));
    };
    fetchAllData();
  }, [dispatch, filteredType]);

  useEffect(() => {
    if (inview) setPage((prev) => prev + 1);
  }, [inview]);

  return (
    <Wrapper>
      <MainContainer>
        <TabList />
        <ItemList data={filteredItem.slice(0, page * viewLimit)} />
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
