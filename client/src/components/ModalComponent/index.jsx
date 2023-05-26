import React from "react";

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

function ModalComponent({ children, href, full, name }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <div onClick={onOpen}>{children}</div>
      <Modal
        size={full ? "full" : "4xl"}
        onClose={onClose}
        isOpen={isOpen}
        isCentered
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <iframe style={{ width: "100%", height: "70vh" }} src={href} />
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
