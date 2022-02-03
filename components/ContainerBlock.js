import React from "react";
import userData from "@constants/data";
import { useRouter } from "next/router";
import { Alert } from "../components/Alert"; 
import Head  from "next/head";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "Matteo Bianchi - Developer | DevOps | SRE | Coach",
    description: `I've been working in the enterprise IT field for more than 5 years. Get in touch with me to know more.`,
    image: "/images/propic.jpg",
    type: "website",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://${userData.domain}${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://${userData.domain}${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Matteo Bianchi" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@mbianchidev" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <Alert />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  );
}
