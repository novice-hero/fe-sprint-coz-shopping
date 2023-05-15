import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import styled from "styled-components";

export default function BookmarkList() {
  const [item, setItem] = useState([]);
  const bookmark = useSelector((state) => state.bookmark);

  useEffect(() => {
    if (bookmark.length > 4) setItem(bookmark.slice(0, 4));
    else setItem([...bookmark]);
  }, [bookmark]);

  return (
    <>
      <Label>북마크 리스트</Label>
      {item.length ? <ItemList data={item} /> : <div>북마크가 없어잉...</div>}
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
