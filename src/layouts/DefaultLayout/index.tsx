import { Outlet } from "react-router-dom";
import { Header } from "../../components/Header";
import { LayoutConatiner } from "./styles";

export function DefaultLayout() {
  return (
    <LayoutConatiner>
      <Header />
      <Outlet />
    </LayoutConatiner>
  );
}
