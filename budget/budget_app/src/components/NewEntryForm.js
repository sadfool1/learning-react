import React from "react";
import {Form} from "semantic-ui-react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryFormA from "./EntryFormA";
import useEntryDetails from "../hooks/useEntryDetails"

const NewEntryForm = () => {
  const {
    description,
    setDescription,
    value,
    setValue,
    isExpense,
    setIsExpense,
    addEntry } = useEntryDetails()

  return (
    <Form unstackable>

      <EntryFormA
        description={description}
        value={value}
        isExpense={isExpense}
        setDescription={setDescription}
        setValue={setValue}
        setIsExpense={setIsExpense}
        />

      <ButtonSaveOrCancel addEntry={addEntry} />

    </Form>
  );

}

export default NewEntryForm;
