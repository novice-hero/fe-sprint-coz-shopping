import styled from "styled-components";

export default function Error({ content }) {
  return <ErrorBox>{content}</ErrorBox>;
}

const ErrorBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 0px;
  gap: 24px;
  width: 70.5rem;
  height: 16.5rem;
`;
