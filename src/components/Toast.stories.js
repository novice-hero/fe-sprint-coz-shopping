import { SingleToast as Template } from "./SingleToast";

export default {
  title: "Toast",
  component: Template,
};

export const AddToast = {
  args: {
    isAdd: true,
    data: {
      id: 0,
      content: "❤️ 상품이 북마크에 추가되었습니다.",
    },
  },
};

export const RemoveToast = {
  args: {
    isAdd: false,
    data: {
      id: 0,
      content: "🤍 상품이 북마크에 제거되었습니다.",
    },
  },
};
