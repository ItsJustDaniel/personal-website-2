import Head from "next/head";
import Image from "next/image";
import About from "../components/About";
import Contact from "../components/Contact";
import Experience from "../components/Experience";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Skills from "../components/Skills";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Daniel Li || Home</title>
        <link rel="icon" href="/images/logo.jpg"></link>

        <meta property="og:url" content="https://lidaniel.vercel.app/" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Daniel Li's Personal Website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          property="og:description"
          content="My personal website that showcases my projects"
        />
        <meta
          property="og:image"
          content="https://lidaniel.vercel.app/images/personal-site.png"
        />
      </Head>
      <div>
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}
