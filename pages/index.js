import Head from "next/head";
import Image from "next/image";

import Header from "../components/Header";
export default function Home() {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header></Header>

      <main>
        <div className="hero">
          <div className="hero-content flex flex-col">
            {/* eslint-disable-next-line react/no-unescaped-entities*/}
            <p>Hello! I'm Emerson Hicks</p>
            <p>
              I'm a software engineer who specializes in front-end development.
              I'm a student working on my Bachelors in Computer Science
            </p>
            <button className="btn btn-primary">About Me</button>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}