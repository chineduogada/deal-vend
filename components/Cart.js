import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

function Cart({ renderOpenButton }) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {renderOpenButton(onOpen)}

      <Modal
        onClose={onClose}
        isOpen={isOpen}
        isCentered
        closeOnOverlayClick={false}
        size="4xl"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            lorem ipsum, lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem
            ipsum, lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum,
            lorem ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum, lorem
            ipsumlorem ipsumlorem ipsumlorem ipsum lorem ipsum, lorem ipsumlorem
            ipsumlorem ipsumlorem ipsum lorem ipsum, lorem ipsumlorem ipsumlorem
            ipsumlorem ipsum
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Cart;
