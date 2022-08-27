import { NextPage } from "next";
import Head from "next/head";

interface SeoI {
  title: string;
}

const Seo: NextPage<SeoI> = ({ title }) => {
  return (
    <Head>
      <title>{title} | BY_ART</title>
    </Head>
  );
};

export default Seo;
