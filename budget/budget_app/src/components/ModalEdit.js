import React from "react";
import {Modal, Button} from "semantic-ui-react"
import EntryFormA from "./NewEntryForm"
import {closeEditModal} from "../actions/modals.actions"
import {useDispatch} from "react-redux"


const ModelEdit = ({isOpen, setIsOpen, ...otherProps}) => {

  const dispatch = useDispatch()

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
        <Button onClick={()=> dispatch(closeEditModal())}>Close</Button>
        <Button onClick={()=> setIsOpen(false)} primary>Ok</Button>

      </Modal.Actions>


    </Modal>);

}

export default ModelEdit;
