import React, { useState } from "react";
import {useDispatch} from "react-redux";
import {Form} from "semantic-ui-react";
import {addEntryRedux} from "../actions/entries.actions";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel";
import EntryFormA from "./EntryFormA";
import {v4 as uuidv4} from "uuid"

const NewEntryForm = () => {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)
  const dispatch = useDispatch()
  const addEntry = () => {
    dispatch(addEntryRedux({
      id: uuidv4(),
      description,
      value,
      isExpense
    }))
    setDescription('')
    setValue('')
    setIsExpense(true)
  }
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
