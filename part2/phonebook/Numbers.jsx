const Display = ( {persons} ) => {
    return (
    <div>
    <h3>Numbers</h3>
    <ul>
    {persons.map(person =>
        <li key={person.id}>{person.name}, {person.number}</li>
    )}
    </ul>
    </div>
    )
}

export default Display
