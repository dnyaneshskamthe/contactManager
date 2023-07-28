import React from 'react'

const Data = (props) => {
  return (
    <div>{props.title}</div>

  )
}
Data.defaultProps={
    title : "i am"
}

export default Data