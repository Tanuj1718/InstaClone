import { Text, Flex, VStack, Box, Link } from "@chakra-ui/react"
import SuggestedHeader from "./SuggestedHeader"
import SuggestedUser from "./SuggestedUser"


const SuggestedUsers = ()=>{

    return <VStack py={8} px={6} gap={4}>
        <SuggestedHeader/>
        <Flex alignItems={"center"} justifyContent={"space-between"} w={"full"} >
            <Text fontSize={12} fontWeight={"bold"} color={"gray.500"}>
                Suggested for you
            </Text>
            <Text fontSize={12} fontWeight={"bold"} _hover={{color:"gray.500"}} cursor={"pointer"}>
                See All
            </Text>
        </Flex>
        <SuggestedUser name="tribird" followers ={1494} avatar= " " />
        <SuggestedUser name="quadrunk" followers ={134} avatar= " " />
        <SuggestedUser name="mothell" followers ={3294} avatar= " " />

        <Box fontSize={12} color={"gray.500"} mt={5} alignSelf={"start"}>
        © 2024 Built by{" "}
        <Link href="https://github.com/Tanuj1718" target="_blank" color="blue.500" fontSize={14} style={{textDecoration: "none"}}>
            Tanuj Nainwal
        </Link>
        </Box>
    </VStack>
}

export default SuggestedUsers