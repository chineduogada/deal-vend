import { useState } from "react";
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import { ImSearch } from "react-icons/im";

const SearchBar = ({
  value = "",
  onSearch = () => console.log("Searching..."),
  bg,
}) => {
  const [query, setQuery] = useState(value);

  const handleChange = ({ target }) => setQuery(target.value);

  return (
    <InputGroup size="md">
      <Input
        value={query}
        onChange={handleChange}
        pr="3.5rem"
        placeholder="Search anything..."
        disabled
        bg={bg}
      />

      <InputRightElement>
        <IconButton onClick={onSearch} disabled>
          <ImSearch />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
