import Head from "next/head";
import { Center, Container, Input } from "@chakra-ui/react";

import styles from "../styles/Home.module.css";
import DynamicText from "../components/DynamicText";

const Home = () => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };

  return (
    <Center h="100vh" flexDirection="column">
      <Head>
        <title>Coding Test</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container width="auto" centerContent>
        <DynamicText />
        <Input onChange={onChange} />
      </Container>
    </Center>
  );
};

export default Home;
