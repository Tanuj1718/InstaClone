import { Flex, GridItem, Image, useDisclosure, Text, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, Modal } from "@chakra-ui/react"
import {AiFillHeart} from 'react-icons/ai'
import {FaComment} from 'react-icons/fa'
import ProfilePosts from "./ProfilePosts"
const ProfilePost = ({img})=>{
    const {isOpen, onOpen, onClose} = useDisclosure()
    return <>
    <GridItem
    cursor={"pointer"}
    borderRadius={4}
    overflow={"hidden"}
    border={"1px solid"}
    borderColor={"whiteAlpha.300"}
    position={"relative"}
    aspectRatio={1/1}
    onClick={onOpen}
    >
        <Flex
        opacity={0}
        _hover={{opacity: 1}}
        position={"absolute"}
        top={0}
        left={0}
        right={0}
        bottom={0}
        bg={"blackAlpha.700"}
        transition={"all 0.3s ease"}
        zIndex={1}
        justifyContent={"center"}
        >
            <Flex alignItems={"center"} justifyContent={"center"} gap={50}>
                <Flex>
                    <AiFillHeart size={20}/>
                    <Text fontWeight={"bold"} ml={2}>
                        18
                    </Text>
                </Flex>
                <Flex>
                    <FaComment size={20}/>
                    <Text fontWeight={"bold"} ml={2}>
                        18
                    </Text>
                </Flex>
            </Flex>
        </Flex>
        <Image src={img} alt="profile post" w={"100%"} h={"100%"} objectFit={"cover"}/>
    </GridItem>

    <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
}
export default ProfilePost