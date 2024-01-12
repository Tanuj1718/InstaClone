import { Box, Grid, Skeleton, VStack} from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ProfilePost from "./ProfilePost"


const ProfilePosts = ()=>{
    const [isLoading, setIsLoading] = useState(true)
    
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false)
        }, 1000);
    })

    return <>
    <Grid 
    templateColumns={{
        sm:"repeat(1, 1fr)",
        md: "repeat(3, 1fr)",
    }}
    gap={1}
    columnGap={1}
    >
        {isLoading && [0,1,2,3,4,5].map((_, index)=>(
            <VStack key={index} alignItems={"flex-start"} gap={4}>
                <Skeleton w={"full"}>
                    <Box h="300px">Content wrapped</Box>
                </Skeleton>
            </VStack>
        ))}

    {!isLoading && (
        <>
        <ProfilePost img="/img1.png" />
        <ProfilePost img="/tn1718.jpg"/>
        <ProfilePost img="https://5.imimg.com/data5/SELLER/Default/2022/8/VM/JU/JN/123797861/kedarnath-yatra-by-helicopter-500x500.jpeg" />
        <ProfilePost img="/img4.png" />
        </>
    )}
    </Grid>
    </>
}
export default ProfilePosts