import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import Tab from "./Tab";
import { tabActions } from "../store/tabSlice";

export default function TabList() {
  const tabs = useSelector((state) => state.tab.tabs);
  const selectId = useSelector((state) => state.tab.currentId);
  const dispatch = useDispatch();

  const handleClick = (id, type) => {
    dispatch(tabActions.changeId(id));
    dispatch(tabActions.changeType(type));
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
