import styled from "styled-components";

export default function Footer() {
  return (
    <_footer>
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates</p>
    </_footer>
  );
}

const _footer = styled.footer`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #888888;
  border-top: 1px solid #0000001a;
`;
