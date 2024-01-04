import { Box, Flex } from "@chakra-ui/react"
import {useLocation} from 'react-router-dom'
import Sidebar from "../../components/AuthForm/Sidebar/Sidebar"


const PageLayout = ({children})=>{
    const {pathname} = useLocation()
    return (
        <Flex>
            {/* sidebar on the left */}
            {pathname != '/auth' ? (
                <Box w={{base:"70px", md:"240px"}}>
                <Sidebar/>
            </Box>
            ): null}
            {/* the page content on the right */}
            <Box flex={1} w={{base: "calc(100%-70%)", md: "calc(100%-24px)"}}>
                {children}
            </Box>
        </Flex>
    )
}

export default PageLayout