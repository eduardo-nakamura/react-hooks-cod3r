import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useEffect, useRef, useState } from 'react';

const UseRef = () => {
    const [value1, SetValue1] = useState("");
    const [value2, SetValue2] = useState("");
    const [value3, SetValue3] = useState("");
    const count = useRef(0)
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    useEffect(function () {
        count.current = count.current + 1
        if (myInput2.current) { // Check if myInput2.current is not null
            myInput2.current.focus();
        }
        SetValue3(merge(value1, value2))
    }, [value1])

    useEffect(function () {
        count.current++
        if (myInput1.current) { // Check if myInput1.current is not null
            myInput1.current.focus();
        }
        SetValue3(merge(value1, value2))
    }, [value2])

    function merge(s1, s2) {
        let resultado = '';
        for (let index = 0; index < Math.max(s1.length, s2.length); index++) {
            if (index < s1.length) {
                resultado += s1[index]
            }
            if (index < s2.length) {
                resultado += s2[index]
            }
        }
        return resultado
    }

    return (
        <div className="UseRef">
            <PageTitle
                title="Hook UseRef"
                subtitle="Retorna um objeto mutável com a propriedade .current!"
            />
            <SectionTitle title="Exercicio 1" />
            <div className="bg">
                <p>{`const count = useRef(0) `}</p>
                <p>{`count.current = count.current + 1 // adiciona 1 ao current cada vez que o a propriedade é renderizada`}</p>
            </div>

            <div className="center">
                <div>
                    <span className="text">Valor: </span>
                    <span className="text">{value3} [</span>
                    <span className="text red">{count.current}</span>
                    <span className="text">]</span>
                </div>

                <input type="text" ref={myInput1} className="input" value={value1} onChange={e => SetValue1(e.target.value)} />
            </div>

            <SectionTitle title="Exercicio 2" />
            <div className="bg">
                <p>1. Juntar as duas strings alternando as letras de cada</p>
            </div>
            <div className="center">
                <input type="text" ref={myInput2} className="input" value={value2} onChange={e => SetValue2(e.target.value)} />
            </div>
        </div>
    )
}

export default UseRef
