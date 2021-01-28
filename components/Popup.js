import {
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
} from "@chakra-ui/react";

const Popup = ({ trigger, header, children, footer }) => {
  return (
    <Popover>
      <PopoverTrigger>{trigger}</PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverCloseButton />
        {header && <PopoverHeader>{header}</PopoverHeader>}
        {children && <PopoverBody>{children}</PopoverBody>}
        {footer && <PopoverFooter>{footer}</PopoverFooter>}
      </PopoverContent>
    </Popover>
  );
};

export default Popup;
