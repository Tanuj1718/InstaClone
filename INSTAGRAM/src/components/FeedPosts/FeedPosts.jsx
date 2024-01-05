import { Container, VStack, Flex, SkeletonCircle, Skeleton, Box } from "@chakra-ui/react";
import FeedPost from "../FeedPost/FeedPost";
import { useEffect, useState } from "react";

const FeedPosts = () =>{
    const [isLoading, setIsLoading] = useState(true)
    useEffect(()=>{
        setTimeout(()=>{
            setIsLoading(false)
        }, 2000)
    },[])

    return (
        <Container maxW={"container.sm"} py={10} px={2}>
            {isLoading && [0,1,2,3].map((_, index)=>(
                <VStack key={index} gap={4} alignItems={"flex-start"} mb={10}>
                    <Flex gap= '2' >
                        <SkeletonCircle size= '10'/>
                        <VStack gap={2} alignItems={"flex-start"}>
                            <Skeleton height='10px' w={"200px"}/>
                            <Skeleton height='10px' w={"200px"}/>
                        </VStack>
                    </Flex>
                    <Skeleton w={"full"}>
                        <Box h={"500px"}>contents wrapped</Box>
                    </Skeleton>
                </VStack>
            ))}
        {!isLoading && (
            <>
            <FeedPost
            img = '/img1.png' username = 'miss_pm' avatar ='/img1.png'
            />
            <FeedPost
            img = '/img2.png' username = 'vk18' avatar ='/img1.png'
            />
            <FeedPost
            img = '/img3.png' username = 'starx' avatar ='/img1.png'
            />
            <FeedPost
            img = '/img4.png' username = 'tanuj_1718' avatar ='/img1.png'
            />
            </>
        )}
            </Container>
    )
}

export default FeedPosts