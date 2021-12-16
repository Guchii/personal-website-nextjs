import NextLink from "next/link"
import { Flex, Heading, Link, Spacer, Button, Box, IconButton, useColorMode, useToast } from "@chakra-ui/react";
import { BsFillMoonFill } from "react-icons/bs"
const Header = () => {
    const { colorMode, toggleColorMode } = useColorMode();
    const toast = useToast();
    const toastIt = () => {
        toast({
            title: 'Not Available Now',
            description: "Work in progress.",
            status: 'error',
            duration: 1000,
            isClosable: true,
        })
    }
    return (
        <>
            <Flex p={6} gap={6} justifyContent={"flex-start"} alignItems={"center"} wrap={"wrap"}>
                <Heading size={"md"}>
                    Shivom Srivastava
                </Heading>
                <Flex gap={4}>
                    <LinkItem text="Home" href={"/"} />
                    <LinkItem text="Skills" href={"skills"} />
                    <LinkItem text="Projects" href="/projects" />
                    <LinkItem text="Blog" href={"/blog"} />
                    <LinkItem text="Contact" href="/contact" />
                </Flex>
                <Spacer />
                <Flex gap={3}>
                    <IconButton
                        aria-label='Search database'
                        icon={<BsFillMoonFill />}
                        onClick={toggleColorMode}
                    />
                    <Button onClick={toastIt} colorScheme='teal'>Resume</Button>
                </Flex >
            </Flex>
        </>

    );
};

const LinkItem = ({ text, href }) => <NextLink href={href || "/"} passHref><Link>{text}</Link></NextLink>

export default Header;
