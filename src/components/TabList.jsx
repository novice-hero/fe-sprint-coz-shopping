import { useDispatch, useSelector } from "react-redux";
import { productListActions } from "../store/ProductListSlice";
import styled from "styled-components";
import Tab from "./Tab";

export default function TabList() {
  const tabs = [
    { id: 0, url: "/tab_all.png", title: "전체", type: "All" },
    { id: 1, url: "/tab_product.png", title: "상품", type: "Product" },
    { id: 2, url: "/tab_category.png", title: "카테고리", type: "Category" },
    { id: 3, url: "/tab_exhibition.png", title: "기획전", type: "Exhibition" },
    { id: 4, url: "/tab_brand.png", title: "브랜드", type: "Brand" },
  ];
  const selectId = useSelector((state) => state.productList.currentId);
  const dispatch = useDispatch();

  const handleClick = (id, type) => {
    dispatch(productListActions.changeId(id));
    dispatch(productListActions.changeType(type));
  };

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          tab={tab}
          selectId={selectId}
          handleClick={handleClick}
        />
      ))}
    </TabContainer>
  );
}

const TabContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 12px;
  gap: 36px;

  width: 554px;
  height: 122px;
  margin-top: 1rem;
`;
