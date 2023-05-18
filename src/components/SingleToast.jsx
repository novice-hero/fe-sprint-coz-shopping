import styled from "styled-components";

export default function SingleToast({ data }) {
  return <Toast key={data.id}>{data.content}</Toast>;
}

const Toast = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 18rem;
  height: 3.25rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.15);
  border-radius: 12px;
  z-index: 1;
`;
