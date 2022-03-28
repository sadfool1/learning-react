import React from "react";
import {Modal, Button} from "semantic-ui-react"
import EntryFormA from "./NewEntryForm"

const ModelEdit = ({isOpen, setIsOpen, ...otherProps}) => {

  return (
    <Modal open={isOpen}>
      <Modal.Header> Edit Entry</Modal.Header>
      <Modal.Content>
        <EntryFormA
          description={otherProps.description}
          value={otherProps.value}
          isExpense={otherProps.isExpense}
          setDescription={otherProps.setDescription}
          setValue={otherProps.setValue}
          setIsExpense={otherProps.setIsExpense}
         />
      </Modal.Content>

      <Modal.Actions>
        <Button onClick={()=> setIsOpen(false)}>Close</Button>
        <Button onClick={()=> setIsOpen(false)} primary>Ok</Button>

      </Modal.Actions>


    </Modal>);

}

export default ModelEdit;
