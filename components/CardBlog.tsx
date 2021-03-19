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
        <Image src={blog?.imageUrl} alt={blog?.title} />

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <Badge borderRadius="full" px="2" colorScheme="teal">
              New
            </Badge>
            {/* <Box
              color="gray.500"
              fontWeight="semibold"
              letterSpacing="wide"
              fontSize="xs"
              textTransform="uppercase"
              ml="2">
              {blog.beds} beds &bull; {property.baths} baths
            </Box> */}
          </Box>

          <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated>
            {blog?.title}
          </Box>

          {/* <Box>
            {blog.formattedPrice}
            <Box as="span" color="gray.600" fontSize="sm">
              / wk
            </Box>
          </Box> */}

          <Box d="flex" mt="2" alignItems="center">
            {/* {Array(5)
            .fill("")
            .map((_, i) => (
              <StarIcon key={i} color={i < property.rating ? "teal.500" : "gray.300"} />
            ))} */}
            {/* <Box as="span" ml="2" color="gray.600" fontSize="sm">
              {property.reviewCount} reviews
            </Box> */}
          </Box>
        </Box>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>awd dsads asdsad</ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
