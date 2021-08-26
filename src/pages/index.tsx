import Head from "next/head";
import { GlitchComponent } from "../components/GlitchComponent";
import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pensei Alto | Home</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <GlitchComponent text="pensei alto" />
        </section>
        <section className={styles.text}>
          <p>
            <span>penseialto@root: </span>Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Consequatur sunt dignissimos, nobis
            officia blanditiis voluptate ad, optio nemo totam praesentium quam
            quasi, magnam laboriosam similique molestias. Perspiciatis dolor ex
            rem?
          </p>
        </section>
      </main>
    </>
  );
}
