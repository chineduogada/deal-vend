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
import { GrCart } from "react-icons/gr";

function Cart() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>
        <GrCart />
      </Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
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
