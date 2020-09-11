import React from 'react'

function SearchBar(props) {
    return (
        <>
            <input style={{marginBottom:"15px"}}type="text" className="form-control" onChange={props.writeSearch}/>
        </>
    )
}

export default SearchBar
