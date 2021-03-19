import {
  Box,
  Image,
  Badge,
  useDisclosure,
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import React from "react";

export const CardBlog = ({ blog }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onClick = () => {
    console.log("cli");
    onOpen();
  };

  return (
    <>
      <Box maxW="xs" borderWidth="1px" borderRadius="lg" overflow="hidden" onClick={onOpen} cursor="pointer">
        <Image src={blog?.imageUrl} alt={blog?.title} maxH={150} />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {blog?.title}
          </Box>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{blog?.title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image src={blog?.imageUrl} alt={blog?.title} mb={4}/>
            {blog?.content}
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
