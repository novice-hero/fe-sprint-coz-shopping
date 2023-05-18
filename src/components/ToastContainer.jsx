import { useSelector } from "react-redux";
import styled from "styled-components";
import SingleToast from "./SingleToast";

export default function ToastContainer() {
  const toasts = useSelector((state) => state.toast.toastQueue);
  console.log(toasts);
  return (
    <ToastBox>
      {toasts.map((toast) => (
        <SingleToast key={toast.id} data={toast} />
      ))}
    </ToastBox>
  );
}

const ToastBox = styled.section`
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  right: 2rem;
  bottom: 1rem;
  width: 20rem;
  height: 30rem;
`;
