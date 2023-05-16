import styled from "styled-components";

export default function Tab({ tab, selectId, handleClick }) {
  return (
    <Wrapper onClick={() => handleClick(tab.id, tab.type)}>
      <ImgCircle src={tab.url} alt="tab_img" />
      {tab.id === selectId ? (
        <TitleSelect>{tab.title}</TitleSelect>
      ) : (
        <TitleNoSelect>{tab.title}</TitleNoSelect>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 82px;
  height: 110px;
  cursor: pointer;
`;

const ImgCircle = styled.img`
  width: 82px;
  height: 82px;
  box-sizing: border-box;
  border-radius: 50%;
  border: 1px solid rgba(0, 0, 0, 0.1);
`;

const TitleNoSelect = styled.span`
  margin-top: 2px;
  height: 19px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #000000;
`;

const TitleSelect = styled(TitleNoSelect)`
  color: #412dd4;
  border-bottom: 2px solid #412dd4;
`;
