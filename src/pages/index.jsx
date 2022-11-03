import {useState, useCallback, useMemo} from 'react'


const Test = () => {
    const [name, setname] = useState('Bruno');
    const [age, setAge] = useState(24);

    const handleChangeName = useCallback(() => {
        console.log('alterou nome')
        setname(prev => prev == 'Bruno' ? 'Azzi' : 'Bruno')
    }, []   )

    const handleChangeAge = useCallback(() => {
        const newAge = 10 * age;
        console.log('idade atual: ',  age, newAge)
        setAge(prev => prev == 24 ? 25 : 24)
    }, []  )




  return (<>
        <p>
            Idade: {age}
        </p>
        <br></br>
        <p>
            Nome: {name}
        </p>
        <br></br>
        <button  onClick={handleChangeName} >Alterar Nome</button>
        <br></br>
        <br></br>
        <button  onClick={handleChangeAge} >Alterar Idade</button>

    </>
  )
}


export {Test};