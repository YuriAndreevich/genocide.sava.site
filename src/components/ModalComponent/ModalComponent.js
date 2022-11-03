import React from 'react'


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
    const {
        isOpen,
        onOpen,
        onClose
      } = useDisclosure();

  return (
    <>
    <Button colorScheme='blackAlpha' onClick={onOpen}>{props.name}</Button>
    <Modal
      size={ props.full ? 'full' : '4xl'}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{props.name}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
<img style={{height:'84vh', margin:'0 auto'}} src={props.href} alt=''/>
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Закрыть</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>
  )
}

export default ModalComponent