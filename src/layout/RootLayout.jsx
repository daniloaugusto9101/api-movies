import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function RootLayout() {
  return (
    <>
      <Header />
      <section>
        {/* INICIO - Renderização das páginas */}
        <Outlet />
        {/* FIM - Renderização das páginas */}
      </section>
      <Footer />
    </>
  );
}
