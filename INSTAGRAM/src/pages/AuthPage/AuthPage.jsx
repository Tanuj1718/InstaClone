import { Flex, Container, VStack } from "@chakra-ui/layout";
import { Box } from "@chakra-ui/layout";
import React from "react";
import { Image } from "@chakra-ui/image";
import AuthForm from "../../components/AuthForm/AuthForm/AuthForm";

function AuthPage(){
    return(
        <Flex minH={"100vh"} justifyContent={"center"} alignItems={"center"} px={4}>
            <Container maxWidth={"container.md"} padding={0}>
                <Flex justifyContent={"center"} alignItems={"center"} gap={10}>
                <Box display = {{base:"none",md:"block"}}>
                <Image src="public\phoneimg2.jpg" h={400} alt="Phone img" />
            </Box> 

            <VStack spacing={4} align={"stretch"}>
                <AuthForm/>
                <Box textAlign={"center"}>Get the app.</Box>
                <Flex gap={5} justifyContent={"center"}>
                    <Image src="public\playstore.png" h={10} alt="Playstore Logo" />
                    <Image src="public\microsoft.png" h={10} alt="Microsoft Logo" />
                </Flex>
            </VStack>
                </Flex>
            
            </Container>
            </Flex>
    )
}

export default AuthPage