import { useState } from 'react'
import Display from './Numbers'
import PersonForm from './Add'
import Filter from './Search'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNo, setNewNo] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  // 1. Function to handle the submission
  const addPerson = (event) => {
    event.preventDefault() // Prevents the page from reloading

    if (newName === '' || newNo === '') {
    alert('Please enter both a name and a number')
    return
    }
    
    if (persons.some(p => p.number === newNo)) {
      window.alert(`${newNo} is already added to phonebook`)
    }

    else {
      // 2. Create the new object
      const personObject = {
        name: newName,
        number: newNo,
        id: persons.length + 1
      }

      // 3. Update the state using concat (never use push!)
      setPersons(persons.concat(personObject))

    }
    setNewName('')
    setNewNo('')
  }

  // 5. Function to track input typing
  const handleNameChange = (e) => setNewName(e.target.value)
  const handleNoChange = (e) => setNewNo(e.target.value)

  const personsToShow = searchTerm === ''
    ? persons
    : persons.filter(person => 
        person.name.toLowerCase().includes(searchTerm.toLowerCase())
      )

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
      <h3>Add a new person</h3>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNo={newNo}
        handleNoChange={handleNoChange} />
      <Display persons={personsToShow} />
    </div>
  )
}

export default App
