import Head from "next/head";
import Heading from "@/components/Heading";

const Posts = () => (
    <>
    <Head>
      <title>Posts</title>
    </Head>
    <Heading text="Posts list:" />
    <Heading tag="h2" text="post 1"/>
    <Heading tag="h2" text="post 2"/>
    </>
  )

export default Posts