
import { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../data/DataContext'
import SectionTitle from '../../components/layout/SectionTitle';
import { AppContext } from '../../data/Store';
import { useEffect } from 'react';

const UseContext = () => {
    const context = useContext(DataContext);

    function addNum(n) {
        context.setDataState({
            ...context.dataState,
            number: context.dataState.number + n
        })
    }

    const {number,text, setNumber, setText} = useContext(AppContext);
    useEffect(function () {
            if (number > 1250) {
                setText('Eita');
            } else {
                setText('Ufa');
            }
    }, [number])
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
            <SectionTitle title="Exercício 01" />            
            <div className="bg">
                <p>{`Criado um DataContext.js`}</p>
                <p>{`App.Jsx`}</p>
                <ul>
                    <li><p>{`import DataContext, {data} from '../data/DataContext'`}</p></li>
                    <li><p>{`Criado um UseState para o dataContext`}</p></li>
                    <li><p>{`Criado um container DataContext.Provider`}</p></li>
                </ul>
                <p>{`UseContext.Jsx`}</p>
                <ul>
                    <li><p>{`Criado um botão que adiciona e subtrai um do valor de number`}</p></li>
                </ul>
            </div>
            <div className="center">
                <span className="text">{context.dataState.number}</span>
                <span className="text">{context.dataState.text}</span>
                <div>
                    <button onClick={() => addNum(-1)} className="btn">-1</button>
                    <button onClick={() => addNum(+1)} className="btn">+1</button>
                </div>
            </div>
            <SectionTitle title="Exercício 02" />  
            <div className="bg">
            <p>{`Criado um Store.jsx`}</p>
            </div>
            <div className="center">
                <span className="text">{number}</span>
                <span className="text">{text}</span>
                <div><button className="btn" onClick={() => setNumber(number - 1)}>-1</button><button className="btn" onClick={() => setNumber(number + 1)}>+1</button></div>                
            </div>
        </div>
    )
}

export default UseContext
