import { useEffect, useState } from "react";
import cozShoppingApi from "../api/cozShoppingApi";
import ItemList from "./ItemList";
import styled from "styled-components";
import Error from "./Error";

export default function ProductList() {
  const [item, setItem] = useState([]);
  useEffect(() => {
    cozShoppingApi
      .getFourItem()
      .then((data) => {
        setItem([...data]);
      })
      .catch((err) => err.message);
  }, []);

  return (
    <>
      <Label>상품 리스트</Label>
      {item.length ? (
        <ItemList data={item} />
      ) : (
        <Error content={"상품을 불러올 수 없어잉..."} />
      )}
    </>
  );
}

const Label = styled.div`
  width: 179px;
  height: 38px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
  display: flex;
  align-items: center;

  color: #000000;
`;
