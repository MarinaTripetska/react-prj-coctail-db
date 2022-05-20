import { useState } from "react";
import { Input, Form, SearchIcon, SubmitButton } from "./SearchInput.styled";

export const SearchInput = () => {
  const { value, setValue } = useState("");

  return (
    <Form>
      <SubmitButton type="submit">
        <SearchIcon size="2em" />
      </SubmitButton>

      <Input
        autoComplete="off"
        name="search"
        onChange={setValue}
        type="text"
        value={value}
        placeholder="Search by name"
      />
    </Form>
  );
};
