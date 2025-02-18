import React, {useState} from 'react';
import PropTypes from 'prop-types';

const initialState = {
    number: 1234,
    text: 'Context API + Hooks'
}

// eslint-disable-next-line react-refresh/only-export-components
export const AppContext = React.createContext(initialState)

function Store(props) {
  const [storeState, setStoreState] = useState(initialState)

  function updateState(key, value) {
    setStoreState({
        ...storeState,
        [key]: value
    })
  }

  return (    
    <AppContext.Provider value={{
        number: storeState.number, 
        text: storeState.text, 
        setNumber: n => updateState('number', n),
        setText: t => updateState('text', t),
    }}>
        {props.children}
    </AppContext.Provider>
  )
}

Store.propTypes = {
    children: PropTypes.node.isRequired, // Or PropTypes.element, see explanation below
};

export default Store