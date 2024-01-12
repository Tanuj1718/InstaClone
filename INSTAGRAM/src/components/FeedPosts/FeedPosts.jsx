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
            img = 'vk18.jpg' username = 'VK_18' avatar ='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6iE_8knqjuOLL8A-EMJsmHXWQo3JFqQ2qRA&usqp=CAU'
            />
            <FeedPost
            img = '/sm18.jpg' username = 'smriti_18' avatar ='https://upload.wikimedia.org/wikipedia/commons/2/29/Ms._Smriti_Mandhana%2C_Arjun_Awardee_%28Cricket%29%2C_in_New_Delhi_on_July_16%2C_2019_%28cropped%29.jpg'
            />
            <FeedPost
            img = '/tn1718.jpg' username = 'ur_soulmate' avatar ='https://c8.alamy.com/comp/2B07EGR/initial-letter-tn-logo-design-vector-template-linked-typography-tn-letter-logo-design-2B07EGR.jpg'
            />
            </>
        )}
            </Container>
    )
}

export default FeedPosts