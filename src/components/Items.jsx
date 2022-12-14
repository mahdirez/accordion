import React from 'react'
import data from '../data'
import Content from './Content'

function Items() {
  return (
    <div>
        {data.map((item)=>{
         return <Content {...item}/>
        })}
    </div>
  )
}

export default Items