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
}) => {
  const [query, setQuery] = useState(value);

  const handleChange = ({ target }) => setQuery(target.value);

  return (
    <InputGroup size="md">
      <Input
        value={query}
        onChange={handleChange}
        pr="3.5rem"
        placeholder="Enter password"
      />

      <InputRightElement>
        <IconButton onClick={onSearch}>
          <ImSearch />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  );
};

export default SearchBar;
