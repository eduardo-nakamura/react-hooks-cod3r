
import { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
const UseState = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("");
    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="Exercício 01" />
            <div className="bg">
                <p>{`const [count, setCount] = useState(0); // UseState`}</p>
                <p>{`Botão 0 : () => setCount(0) // Definir count como 0`}</p>
                <p>{`Botão -1 : () => setCount(count - 1) // subtrair 1 de count`}</p>
                <p>{`Botão +1 : () => setCount(current => current + 1) // Pega o valor anterior de count e atualiza para novo valor`}</p>
            </div>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                <button className="btn" onClick={() => setCount(0)}>0</button>
                    <button className="btn" onClick={() => setCount(count - 1)}>-1</button>
                    <button className="btn" onClick={() => setCount(current => current + 1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Exercício 02" />
            <div className="bg">
                <p>{`const [name, setName] = useState("");`}</p>
                <p>{`Input: value={name} onChange={e => setName(e.target.value)}`}</p>
            </div>
            <input type="text" className="input" value={name} onChange={e => setName(e.target.value)} />
            <div className="center">
                <span className="text">Input: {name}</span>
            </div>
        </div>
    )
}

export default UseState
