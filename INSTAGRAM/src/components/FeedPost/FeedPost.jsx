import PostHeader from "../FeedPosts/PostHeader"
import PostFooter from "../FeedPosts/PostFooter"
import { Box, Image } from "@chakra-ui/react"
const FeedPost = ()=>{
    return <>
    <PostHeader/>
    <Box>
        <Image src="/img1.png" alt="user profile"/>
    </Box>
    <PostFooter/>
    </>
}
export default FeedPost