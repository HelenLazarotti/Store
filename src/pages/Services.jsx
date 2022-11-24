import Input from '../components/layout/Input'
import Select from '../components/layout/Select'
import Text from '../components/layout/Text'
import Button from '../components/layout/Button'
import Plans from '../components/Plans'

import {useState} from 'react'

function Services({pacotesData}) {
    /*const [pacotes, setPacotes] = useState(pacotesData || {})
    const [planos, setPlanos] = useState([]);

    useEffect(() => {
        //faço request na API:
        fetch('"http://localhost:5000/planos"', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then((resp) => resp.json())
        .then((data) => {
            setPlanos(data)
        })
    }, [])
    
    function handlePlanos(e) {
        setPacotes({
            ...pacotes, category: {
                id: e.target.value,
                name: e.target.value.options[e.target.selectedIndex].text,
            }
        })
    }*/
    const [name, setName] = useState('')
    const [tel, setTel] = useState('')
    const [data, setData] = useState('')
    const [adress, setAdress] = useState('')
    const [distric, setDistrict] = useState('')
    const [pf, setPf] = useState('')
    const [plan, setPlan] = useState('')

    function handleSubmit(e){
        e.preventDefault();
        if (name === '' || tel === '' || data === '' ||adress === '' || distric === '' || pf === ''){
            alert('PREENCHA TODOS OS CAMPOS')
            return
        } 
        console.log('clicou')

        let url = "https://api.whatsapp.com/send?phone=5551996640634&text= Olá, realizei o agendamento de uma limpeza de piscina. %0A Meu nome é: %0A " + {name} + " %0A Tem disponibilidade para o dia: %0A" + {data} + "? Endereço: " +{adress} + " Bairro: "+{distric} + " Ponto de Referência é: " + {pf}

        window.open(url);
    }
    return (
        <div>
            <Text title='Agendar Limpeza de Piscina' />

            <form onSubmit={handleSubmit}>
                <Input type='text'
                    name='name'
                    placeholder='Nome Completo'
                    value={name}
                    onChange={(e) => setName(e.target.value)} />

                <Input type='number'
                    name='tel'
                    placeholder='(+DDD) 00000-0000'
                    value={tel}
                    onChange={(e) => setTel(e.target.value)} />

                <Input type='text'
                    name='date'
                    placeholder='00/00/0000 (verificar disponibilidade pelo WhatsApp)'
                    value={data}
                    onChange={(e) => setData(e.target.value)}  />

                <Input type='text'
                    name='adress'
                    placeholder='Endereço: Rua e Nº'
                    value={adress}
                    onChange={(e) => setAdress(e.target.value)}  />

                <Input type='text'
                    name='district'
                    placeholder='Bairro'
                    value={distric}
                    onChange={(e) => setDistrict(e.target.value)}  />
                
                <Input type='text'
                    name='pf'
                    placeholder='Ponto de Referência'
                    value={pf}
                    onChange={(e) => setPf(e.target.value)} 
                     />

                <Select name='planId' text='Escolha seu plano:'
                value={plan}/>

                <Plans/>

                <Button  type='submit' title='Enviar Pedido'/>
            </form>
            

            
        </div>
    )
}

export default Services