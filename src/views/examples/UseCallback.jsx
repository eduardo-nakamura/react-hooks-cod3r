import { useCallback, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import UseCallbackButtons from './UseCallbackButtons'

const UseCallback = () => {
    const [count, setCount] = useState(0)

    const increase = useCallback(function (delta) {
        setCount(current => current + delta)
    }, [setCount])


    return (
        <div className="UseCallback">
            <PageTitle
                title="Hook UseCallback"
                subtitle="Retorna uma função memoizada!"
            />
            <SectionTitle title="Exercicio 01" />
            <div className="bg">
                <p>{`Componente pai`}</p>
                <p>{`const increase = useCallback(function (delta) {`}</p>
                <p>{`setCount(current => current + delta)`}</p>
                <p>{`}, [setCount])`}</p>
            </div>
            <div className="bg">
                <p>{`Criado um Componente filho UseCallbackButtons com os botões`}</p>
                <p>{`export default React.memo(UseCallbackButtons)`}</p>
            </div>
            <div className="center">
                <span className="text">{count}</span>
                <UseCallbackButtons increase={increase} />
            </div>
        </div>
    )
}

export default UseCallback
