import { Button, Flex, Heading, HStack, Image, Link, Text } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
import { useState } from "react";

export default function Home() {
  return (
    <>
      <HStack
        minHeight={"inherit"}
        justifyContent={"center"}
        alignItems={"center"}
        gap={8}
      >
        <Flex
          flexDirection={"column"}
          height={"100%"}
          textAlign={{ sm: "center", md: "start" }}
          justify="center"
          gap={2}
        >
          <Heading fontSize="4xl">
            Hello! My name is Shivom
          </Heading>
          <Text marginBottom={2} fontSize={{ sm: "md", md: "xl" }}>
            I&apos;m a fullstack developer and I love to develop small and usable
            stuff.
          </Text>
          <Flex justifyContent={{ sm: "center", md: "flex-start" }} gap={3}>
            <Button as={NextLink} size="lg" href="/projects" colorScheme={"purple"}>
              Projects
            </Button>
            <Button as={Link} size="lg" href="https://cv.shivom.tech" isExternal colorScheme={"purple"}>Resume</Button>
          </Flex>
        </Flex>
        <Image
          src="https://github.com/guchii.png"
          alt="Shivom Srivastava"
          rounded={"full"}
          display={{ sm: "none", md: "block" }}
          boxShadow="2xl"
          draggable={false}
          height="280px"
          width="280px"
        />
      </HStack>
      <Head>
        <title>Shivom Srivastava</title>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👋</text></svg>"
        />
      </Head>
    </>
  );
}
