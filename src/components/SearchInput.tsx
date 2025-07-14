import useGameQuerySore from "@/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BsSearch } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

const SearchInput = () => {
  const setSearchTerm = useGameQuerySore((s) => s.setSearchTerm);
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current) setSearchTerm(ref.current.value);
        navigate("/");
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
