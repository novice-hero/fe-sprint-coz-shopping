import { useSelector } from "react-redux";
import Card from "../components/Card";

export default function MainPage() {
  const dummy = [
    {
      id: 16,
      type: "Category",
      title: "전자기기",
      sub_title: null,
      brand_name: null,
      price: null,
      discountPercentage: null,
      image_url:
        "https://images.unsplash.com/photo-1597239450996-ea7c2c564412?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80",
      brand_image_url: null,
      follower: null,
    },
    {
      id: 51,
      type: "Product",
      title: "나이키 조거 팬츠",
      sub_title: null,
      brand_name: null,
      price: "64500",
      discountPercentage: 40,
      image_url:
        "https://images.unsplash.com/photo-1580906853203-f493cea9ff28?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
      brand_image_url: null,
      follower: null,
    },
    {
      id: 44,
      type: "Brand",
      title: null,
      sub_title: null,
      brand_name: "질레트",
      price: null,
      discountPercentage: null,
      image_url: null,
      brand_image_url:
        "https://images.unsplash.com/photo-1559715544-33be62554de3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674&q=80",
      follower: 2958,
    },
    {
      id: 80,
      type: "Exhibition",
      title: "오감 발달에 최고",
      sub_title: "아이 장난감 BEST",
      brand_name: null,
      price: null,
      discountPercentage: null,
      image_url:
        "https://images.unsplash.com/photo-1575364289437-fb1479d52732?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
      brand_image_url: null,
      follower: null,
    },
  ];
  const bookmark = useSelector((state) => state.bookmark);

  return (
    <>
      {"상품 리스트"}
      {dummy.map((v) => (
        <Card key={v.id} data={v}></Card>
      ))}
      {"북마크 리스트"}
      {bookmark.map((v) => (
        <Card key={v.id} data={v}></Card>
      ))}
    </>
  );
}
