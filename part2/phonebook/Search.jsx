const Filter = ( {value, onChange} ) => {
return (
    <div>
    <h3>Search</h3>
        <form>
            <div>
            <input 
                value = {value}
                onChange = {onChange}
            />
            </div>
        </form>
    </div>
    )
}

export default Filter
