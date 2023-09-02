import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <h1>Bem vindo a Aplicação de Filme</h1>
        <ul>
          <li>
            <Link to={"/api-movies"}>Link: Home</Link>
          </li>
        </ul>
      </header>
      <section>
        {/* INICIO - Renderização das páginas */}
        <Outlet />
        {/* FIM - Renderização das páginas */}
      </section>
      <footer>Copyright 2023</footer>
    </>
  );
}
