import React from "react";
import EntryLine from "./EntryLine"
import {Container} from "semantic-ui-react"

const EntryLines = ({entries, setIsOpen, editEntry}) => {

  return (
    <Container>
    {entries.map(
      (entry) => (
        <EntryLine
          key={entry.id}
          {...entry}
          setIsOpen={setIsOpen}
          editEntry={editEntry} />))}
    </Container>
  );

}

export default EntryLines;
