import React from 'react'

export const FrameworkList = (props) => {
  console.log(props)
  if(!props.data || props.data.length === 0) {
    return <h1>No data...</h1>
  }

  return (
    <ul>
      {props.data.map(item => {
        return <li key={item.id}>{item.name}</li>
      })}
    </ul>
  )
}