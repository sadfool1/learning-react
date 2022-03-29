import { Container } from 'semantic-ui-react';
import './App.css';
import MainHeader from "./components/MainHeader"
import NewEntryForm from "./components/NewEntryForm"
import DisplayBalance from "./components/DisplayBalance"
import DisplayBalances from "./components/DisplayBalances"
import {useState, useEffect} from 'react'
import EntryLines from "./components/EntryLines"
import ModalEdit from "./components/ModalEdit"
import {useSelector} from 'react-redux'

function App() {
  const [description, setDescription] = useState('')
  const [value, setValue] = useState('')
  const [isExpense, setIsExpense] = useState(true)

  const [isOpen, setIsOpen] = useState(false)
  const [entryId, setentryId] = useState();
  const [incomeTotal, setIncomeTotal] = useState(0)
  const [expenseTotal, setExpenseTotal] = useState(0)
  const [total, setTotal] = useState(0)

  const entries = useSelector( state => state.entries)
  const isOpenRedux = useSelector( state => state.modals.isOpen)


  useEffect(() => {
    if (!isOpen && entryId) {
      const index = entries.findIndex(entry => entry.id === entryId)
      const newEntries = [...entries]
      newEntries[index].description = description;
      newEntries[index].value = value;
      newEntries[index].isExpense = isExpense;
      // setEntries(newEntries);
      resetEntry();
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpen])

  useEffect(() => {
    let totalIncome = 0;
    let totalExpenses = 0;

    entries.map(entry => {
      if (entry.isExpense) {
        return totalExpenses += Number(entry.value)
      } return totalIncome += Number(entry.value)

    })

    setTotal(totalIncome - totalExpenses)
    setExpenseTotal(totalExpenses)
    setIncomeTotal(totalIncome)

    console.log(`total incomes: ${totalIncome} \n total expenses: ${totalExpenses}`);

  }, [entries])




  const editEntry = (id) => {
    console.log(`edit entry with id: ${id}`);
    if (id) {
      const index = entries.findIndex(entry => entry.id === id);
      const entry = entries[index];
      setentryId(id)
      setDescription(entry.description);
      setValue(entry.value);
      setIsExpense(entry.isExpense);
      setIsOpen(true)

    }
  }

  const resetEntry = () => {
    setDescription('')
    setValue('')
    setIsExpense(true)

  }

  console.log(isOpenRedux);

  return (

    <Container>

      <MainHeader title="Budget" />
      <DisplayBalance label="Your Balance:" value={total} size="small" />
      <DisplayBalances incomeTotal={incomeTotal} expenseTotal={expenseTotal} />

      <MainHeader title="History" type="h3" />

      <EntryLines entries={entries} setIsOpen={setIsOpen} editEntry={editEntry} />


  <MainHeader title="Add new Transaction" type="h3" />

  <NewEntryForm
    description={description}
    value={value}
    isExpense={isExpense}
    setDescription={setDescription}
    setValue={setValue}
    setIsExpense={setIsExpense}

  />
  <ModalEdit
    isOpen={isOpenRedux}
    setIsOpen={setIsOpen}
    description={description}
    value={value}
    isExpense={isExpense}
    setDescription={setDescription}
    setValue={setValue}
    setIsExpense={setIsExpense}
    />


    </Container>

  );
}

export default App;
