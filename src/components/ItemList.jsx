import styled from "styled-components";
import Card from "./Card";

export default function ItemList({ data }) {
  return (
    <ItemContainer>
      {data.map((item) => (
        <Card key={item.id} data={item} />
      ))}
    </ItemContainer>
  );
}

const ItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 0px;
  gap: 24px;
  width: 1128px;
`;
