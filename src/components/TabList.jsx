import styled from "styled-components";
import Tab from "./Tab";
import { useState } from "react";

export default function TabList() {
  const tabs = [
    { id: 0, url: "/tab_all.png", title: "전체" },
    { id: 1, url: "/tab_product.png", title: "상품" },
    { id: 2, url: "/tab_category.png", title: "카테고리" },
    { id: 3, url: "/tab_exhibition.png", title: "기획전" },
    { id: 4, url: "/tab_brand.png", title: "브랜드" },
  ];
  const [selectId, setSelectId] = useState(0);

  const handleClick = (id) => {
    setSelectId(id);
  };

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <Tab
          key={tab.id}
          url={tab.url}
          title={tab.title}
          id={tab.id}
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
`;
