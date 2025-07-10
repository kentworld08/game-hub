import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/logo.png";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface SearchInputProps {
  onSearch: (searchTerm: string) => void;
}

const NavBar = ({ onSearch }: SearchInputProps) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={logo} boxSize="40px" md={{ boxSize: "60px" }} />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
