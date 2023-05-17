import { useCallback, useEffect, useState } from "react";
import TabList from "../components/TabList";
import cozShoppingApi from "../api/cozShoppingApi";
import ItemList from "../components/ItemList";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "../store/ProductListSlice";

export default function ProductListPage() {
  const filteredItem = useSelector((state) => state.productList.items);
  const filteredType = useSelector((state) => state.productList.currentType);
  const viewLimit = useSelector((state) => state.productList.limit);
  const page = useSelector((state) => state.productList.page);
  const endPage = useSelector((state) => state.productList.endPage);
  const inview = useSelector((state) => state.productList.inview);
  const dispatch = useDispatch();

  const [item, setItem] = useState([]);

  useEffect(() => {
    const fetchAllData = async () => {
      const data = await cozShoppingApi.getAllItem();
      dispatch(productListActions.clearItems());

      if (filteredType === "All") {
        dispatch(productListActions.addItems(data));
        dispatch(
          productListActions.setEndPage(Math.ceil(data.length / viewLimit))
        );
      } else {
        dispatch(
          productListActions.addItems(
            data.filter((v) => v.type === filteredType)
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
    };

    fetchAllData();
  }, [dispatch, filteredItem.length, filteredType, viewLimit]);

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
