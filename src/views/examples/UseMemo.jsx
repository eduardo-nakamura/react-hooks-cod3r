import {  useState, useMemo } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function sum(n1,n2){
    const future = Date.now() + 2000
    while(Date.now() < future) {}
    return n1 + n2
}

const UseMemo = () => {
    const [n1, setN1] = useState(0)
    const [n2, setN2] = useState(0)
    const [n3, setN3] = useState(0)

    // const resultado = sum(n1,n2);
    const resultado = useMemo(() => {
        sum(n1,n2)
    }, [n1, n2]);
    
    return (
        <div className="UseMemo">
            <PageTitle
                title="Hook UseMemo"
                subtitle="Retorna um valor memoizado!"
            />
            <SectionTitle title="Exercicio 1" />
            <div className="bg">
                <p>{`const resultado = useMemo(() => {`}</p>
                <p>{`sum(n1,n2)`}</p>
                <p>{`}, [n1, n2]);`}</p>
                <p>{`O useMemo é um Hook do React que permite memorizar o resultado de um cálculo dispendioso,`}</p>
            </div>
            <div className="center">
                <div>
                <input type="number" className="input" value={n1} onChange={e => setN1(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n2} onChange={e => setN2(parseInt(e.target.value))}/>
                <input type="number" className="input" value={n3} onChange={e => setN3(parseInt(e.target.value))}/>
                </div>
                <span className="text">res {resultado}</span>
            </div>
        
        </div>
    )
}

export default UseMemo
