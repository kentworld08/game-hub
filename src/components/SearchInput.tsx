import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const SearchInput = ({ onSearch }: SearchInputProps) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<BsSearch size={20} />}>
        <Input
          width={{
            base: "100%",
            sm: "300px",
            md: "500px",
            lg: "700px",
            xl: "1020px",
          }}
          ref={ref}
          borderRadius={20}
          placeholder="Search games..."
          variant="subtle"
          bg="whiteAlpha.200"
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
