import React from "react";
import EntryLine from "./EntryLine"
import {Container} from "semantic-ui-react"

const EntryLines = ({entries, deleteEntry, setIsOpen, editEntry}) => {

  return (
    <Container>
    {entries.map(
      (entry) => (
        <EntryLine
          key={entry.id}
          {...entry}
          deleteEntry={deleteEntry}
          setIsOpen={setIsOpen}
          editEntry={editEntry} />))}
    </Container>
  );

}

export default EntryLines;
