
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch';

const UseRef = () => {

    const [count, inc, dec] = useCounter();
    const url = 'http://files.cod3r.com.br/curso-react/estados.json'
    const response = useFetch(url)

    function showStates(states) {
        return states.map(state => <li key={state.nome}>{state.nome}</li>)
    }
    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />
            <SectionTitle title="Exercicio #01" />
            <div className="bg">
                <p>{`Criado um useCounter.jsx`}</p>
                <p>{`Contem useState count, function Increase and function Decrease`}</p>
            </div>
            <div className="center">
                <span className='text'>{count}</span>
                <div>
                    <button onClick={() => dec()} className='btn'>-</button>
                    <button onClick={() => inc()} className='btn'>+</button>
                </div>
            </div>

            <SectionTitle title="Exercicio #02" />
            <div className="bg">
                <p>{`Criado um useFetch.jsx`}</p>
                <p>{`Faz uma requisição get a http://files.cod3r.com.br/curso-react/estados.json e retorna um json com estados`}</p>
            </div>
            <div className="center">

                <ul style={{ width: '100%', textAlign: 'left'}}>
                    {response.data ?
                        response.data.map((state) => (
                            <li key={state.nome}>{state.nome} - {state.sigla}</li>
                        ))
                        : false}            
                </ul>
            </div>
        </div>
    )
}

export default UseRef
