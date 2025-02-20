import { useReducer, useState } from 'react';
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle';

const initialState = {
    cart: [],
    products: [],
    user: null,
    other: 'other',
    number: 0
}
//Math.floor(currentState.number / 25);
function reducer(currentState, action) {
    switch (action.type) {
        case 'add2ToNum':
            return { ...currentState, number: currentState.number + 2 }
        case 'multiply7':
            return { ...currentState, number: currentState.number * 7 }
        case 'divide25':
            return { ...currentState, number: Math.floor(currentState.number / 25) }
        case 'addNToNum':
            var numToAdd = Number(action.number); //
            if (isNaN(numToAdd)) { 
                return currentState; // Retorna o estado atual sem alterações
            } else {
                return { ...currentState, number: currentState.number + numToAdd };
            }
        case 'login':
            return { ...currentState, user: { name: action.name } }
        default:
            return currentState;
    }
}

const UseReducer = () => {
    const [state, dispatch] = useReducer(reducer, initialState) // Cria o State a partir do Initia
    const [numberToAdd, setNumberToAdd] = useState(0)

    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício 01" />

            <div className="bg">
                <p><strong>useReducer: </strong></p>
                <p>{`const [state, dispatch] = useReducer(reducer, initialState)`}</p>
                <p><strong>State inicial: </strong></p>
                <p>{`const initialState = {\n   cart: [],\n   products: [],\n   user: null,\n   other: 'other',\n   number: 0\n}`}</p>
                <p><strong>Funcão Reducer: </strong></p>
                <p>{`function reducer(currentState, action) {\n   switch (action.type) {\n      case 'add2ToNum':\n         return { ...currentState, number: currentState.number + 2 }\n      case 'login':\n         return { ...currentState, user: { name: action.name } }\n      default:\n         return currentState;\n   }\n}`}</p>
            </div>

            <div className="center">
                {state.user && state.user.name ? (<span className="text">{state.user.name}</span>) : (<span className="text">Sem usuario</span>)}

                <span className="text">{state.number}</span>
                <div>
                    <button onClick={() => dispatch({ type: 'add2ToNum' })} className="btn">+2</button>
                    <button onClick={() => dispatch({ type: 'login', name: 'Maria' })} className="btn">Login Maria</button>
                </div>
            </div>

            <SectionTitle title="Exercício 02" />
            <div className="bg">
                <p><strong>- Botão multiplicar por 7 </strong></p>
                <p><strong>- Botão dividir por 25 / transformar em inteiro</strong></p>
                <p><strong>- Botão adicionar n</strong></p>
            </div>
            <div className="center">
                <span className="text">{state.number}</span>
                <div>
                    <button onClick={() => dispatch({ type: 'multiply7' })} className="btn">* 7</button>
                    <button onClick={() => dispatch({ type: 'divide25' })} className="btn">/ 25</button>
                    <button onClick={() => dispatch({ type: 'addNToNum', number: parseInt(numberToAdd) })} className="btn" value={numberToAdd}>{`${numberToAdd >= 1 ? '+ ' : ''} ${numberToAdd ? numberToAdd : 0}`}</button>
                    <input type="number" className="input" value={numberToAdd} onChange={e => setNumberToAdd(e.target.value)} />
                    
                    
                </div>
            </div>
        </div>
    )
}

export default UseReducer
