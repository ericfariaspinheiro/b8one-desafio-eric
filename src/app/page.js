import Link from "next/link";

import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>

        <h1 className={styles.title}>
          Desafio B8ONE - Desenvolvedor Front-end
        </h1>

        <p className={styles.description}>
          Este projeto é uma aplicação de e-commerce desenvolvida com Next.js.
          A página de ofertas consome dados de uma API pública e exibe produtos
          em um grid com paginação.
        </p>

        <section className={styles.section}>
          <h2>Funcionalidades</h2>

          <ul>
            <li>Listagem de produtos consumindo uma API externa</li>
            <li>Grid responsivo de produtos</li>
            <li>Paginação no cliente</li>
            <li>Exibição de avaliação com estrelas</li>
            <li>Preço com desconto aplicado</li>
            <li>Loading skeleton enquanto os produtos carregam</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Tecnologias</h2>

          <ul>
            <li>Next.js</li>
            <li>React</li>
            <li>JavaScript</li>
            <li>SCSS</li>
            <li>FakeStore API</li>
          </ul>
        </section>

        <section className={styles.section}>
          <h2>Autor</h2>

          <p>
            Desenvolvido por <strong>Eric Matheus Farias Pinheiro</strong>.
          </p>
        </section>

        <div className={styles.cta}>
          <Link className={styles.button} href="/ofertas">
            Ver Ofertas
          </Link>
        </div>

      </main>
    </div>
  );
}