import Head from "next/head";
import { GlitchComponent } from "../components/GlitchComponent";

export default function Home() {
  return (
    <>
      <Head>
        <title>Pensei Alto | Home</title>
      </Head>
      <main>
        <section>
          <GlitchComponent text="pensei alto" />
        </section>
      </main>
    </>
  );
}
