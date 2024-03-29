import { Avatar, Box, Flex, Link, Text } from "@chakra-ui/react"
import { Link as RouterLink} from "react-router-dom"

const SuggestedHeader = ()=>{
    return <>
        <Flex justifyContent={"space-between"} alignItems={"center"} w={"full"}>
            <Flex alignItems={"center"} gap={2}>
    <Avatar name="As a programmer" size={"lg"} src="/profilepic.jpg" />
    <Text fontSize={12} fontWeight={"bold"}>
        ur_soulmate
    </Text>
    </Flex>
    <Link
    as = {RouterLink}
    to={"/auth"}
    fontSize={14}
    fontWeight={"medium"}
    color={"blue.400"}  
    cursor={"pointer"}
    style={{textDecoration: "none"}}
    _hover={{
        color: "white"
    }}
    transition={"0.2s ease-out"}
    >
        Log out
    </Link>
    </Flex>
    </>

}

export default SuggestedHeader