import React from 'react'
import Row from './Row'

const Table = ({items}) => {
  return (
    <div className='table-container'>
      <table>
        <tbody>
            {/*Must use parenthises not a curly brace there JSX**** */}
            {items.map((item) => ( 
                <Row key={item.id} item={item} />
            ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
