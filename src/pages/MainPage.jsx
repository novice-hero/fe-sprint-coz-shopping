import BookmarkList from "../components/BookmarkList";
import ProductList from "../components/ProductList";
import styled from "styled-components";

export default function MainPage() {
  return (
    <Wrapper>
      <MainContainer>
        <ProductList />
        <BookmarkList />
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
  align-items: flex-start;
  padding: 0px;
  gap: 12px;

  width: 66rem;
  height: 40rem;
`;
