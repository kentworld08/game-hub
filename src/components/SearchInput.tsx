import { Input, InputGroup } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";

const SearchInput = () => {
  return (
    <InputGroup startElement={<BsSearch size={20} />}>
      <Input
        borderRadius={20}
        placeholder="Search games..."
        variant="subtle"
        bg="whiteAlpha.200"
      />
    </InputGroup>
  );
};

export default SearchInput;
