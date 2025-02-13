import { useState,useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(n){
    if (n < 0) return -1
    if (n === 0) return 1
    return calcFatorial(n-1) * n
}

const UseEffect = () => {
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);
    const [isPar, setPar] = useState(false);
    useEffect(function(){
        setFatorial(calcFatorial(number))
        setPar(number % 2 === 0 ? true : false);
    }, [number]);

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />
            <SectionTitle title="Exercício 01" />
            <div className="bg">
                <p>{`useEffect(function(){`}</p>
                <p>{`setFatorial(calcFatorial(number))`}</p>
                <p>{`}, [number]);`}</p>
                <p>{`Função será executada toda vez que a const number for alterada`}</p>
            </div>
            <div className="center">
                <div><span className="text">Fatorial:</span>
                    <span className="text red">{fatorial}</span></div>
                <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
            </div>
            <SectionTitle title="Exercício 02 (Desafio)" />
            <div className="bg">
                <p>Fazer checage se o número do input é par ou impar</p>
            </div>
            <div className="center">
                <span className="text">{number} é {isPar ? "par" : "ímpar"}</span>
            </div>
        </div>
    )
}

export default UseEffect
