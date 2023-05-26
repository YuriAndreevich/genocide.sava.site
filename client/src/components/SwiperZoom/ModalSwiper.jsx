import React from "react";
import SwiperZoom from "./index";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function ModalComponent(props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>{props.children}</div>
      <Modal
        size={props.full ? "full" : "2xl"}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{props.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <SwiperZoom data={props.data} />
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Закрыть</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default ModalComponent;
