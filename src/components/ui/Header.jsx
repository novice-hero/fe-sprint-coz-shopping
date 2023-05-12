import styled from "styled-components";
import MenuButton from "./MenuButton";
import { Link } from "react-router-dom";

const _header = styled.header`
  width: 100%;
  height: 80px;
  position: sticky;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const Logo = styled.span`
  cursor: pointer;
  margin-left: 2rem;
`;

export default function Header() {
  return (
    <_header>
      <Link to={"/"}>
        <Logo>
          <img src="/logo.png" alt="logo" />
        </Logo>
      </Link>
      <MenuButton />
    </_header>
  );
}
