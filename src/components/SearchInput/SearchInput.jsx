import { useState } from "react";
import toast from "react-hot-toast";
import { Input, Form, SearchIcon, SubmitButton } from "./SearchInput.styled";

const notifyERROR = (text) => toast.error(text);

export const SearchInput = ({ onSubmit }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (value.trim() === "") {
      return notifyERROR("Please, provide name of drink");
    }

    onSubmit(value.trim());
    setValue("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      <SubmitButton type="submit">
        <SearchIcon size="2em" />
      </SubmitButton>

      <Input
        autoComplete="off"
        name="search"
        onChange={(e) => setValue(e.target.value)}
        type="text"
        value={value}
        placeholder="Find coktail by name"
      />
    </Form>
  );
};
