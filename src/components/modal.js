import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,
  Center,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

function ModalPeople({ img, title, desc, slider }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Center py={6}>
        <Box
          onClick={onOpen}
          maxW={"350px"}
          w={"full"}
          bg={"white"}
          boxShadow={"2xl"}
          rounded={"md"}
          p={6}
          overflow={"hidden"}
        >
          <Box
            h={"210px"}
            bg={"gray.100"}
            mt={-6}
            mx={-6}
            mb={6}
            pos={"relative"}
            style={{ overflow: "hidden" }}
          >
            <img src={img} layout={"fill"} alt="" />
          </Box>
          <Stack>
            <Heading color={"gray.700"} fontSize={"2xl"} fontFamily={"body"}>
              {title}
            </Heading>
            <Text color={"gray.500"}>{desc}</Text>
          </Stack>
        </Box>
      </Center>

      <Modal isOpen={isOpen} onClose={onClose} size="6xl">
        <ModalOverlay />
        <ModalContent style={{ height: "89vh" }}>
          <ModalHeader>{title}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* <iframe
            style={{ width: "100%", height: "80vh" }}
            src={href}
            title="title"
          /> */}
            <Swiper
              slidesPerView={2}
              pagination={{
                clickable: true,
              }}
              modules={[Pagination]}
              className="mySwiper"
            >

              {slider.map((img, i) =>
                <SwiperSlide key={i}>
                  <img src={img} alt="" />
                </SwiperSlide>
              )}
            </Swiper>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalPeople;
