import React from 'react'

export const data ={
    number: 123,
    text: "texto aqui"
}

export const DataContext = React.createContext(data)

export default DataContext