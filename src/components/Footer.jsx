import { useInView } from "react-intersection-observer";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { productListActions } from "../store/ProductListSlice";
import { useEffect } from "react";

export default function Footer() {
  const { ref, inView } = useInView({ threshold: 0.5 });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(productListActions.setInview(inView));
  }, [inView]);

  return (
    <FooterBox ref={ref}>
      <p>개인정보 처리방침 | 이용 약관</p>
      <p>All rights reserved @ Codestates</p>
    </FooterBox>
  );
}

const FooterBox = styled.footer`
  width: 100%;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: #888888;
  border-top: 1px solid #0000001a;
`;
