import {React} from "react";
import ButtonSaveOrCancel from "./ButtonSaveOrCancel"
import {Form} from "semantic-ui-react"
import EntryFormA from "./EntryFormA"

const NewEntryForm = ({addEntry, ...otherProps}) => {

  return (
    <Form unstackable>

      <EntryFormA
        description={otherProps.description}
        value={otherProps.value}
        isExpense={otherProps.isExpense}
        setDescription={otherProps.setDescription}
        setValue={otherProps.setValue}
        setIsExpense={otherProps.setIsExpense}
        />

      <ButtonSaveOrCancel addEntry={addEntry} />

    </Form>
  );

}

export default NewEntryForm;
