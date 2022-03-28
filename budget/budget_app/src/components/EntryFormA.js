import {React, Fragment} from "react";
import {Form, Checkbox, Segment} from "semantic-ui-react";

const EntryFormA = ({description, setDescription, value, setValue, isExpense, setIsExpense }) => {

  return (
    <Fragment>
    <Form.Group width={3}>
      <Form.Input
        icon="tags"
        width={12}
        label="Description"
        placeholder="New Shingy Thing"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        />

      <Form.Input
        icon="dollar"
        iconPosition="left"
        width={4}
        label="Value"
        placeholder="100"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        />

    </Form.Group>
    <Segment compact>
      <Checkbox
        toggle
        label='is expense'
        checked={isExpense}
        onChange={() => setIsExpense(oldState => !oldState) }/>
    </Segment>

</Fragment>
  );

}

export default EntryFormA;
