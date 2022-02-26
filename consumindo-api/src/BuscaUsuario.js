
import { useEffect, useState} from 'react'

function App() {

    const [itens, setItens] = useState([])

    useEffect(() => {
        const fetchData = async () => {
           const result = await fetch('https://api.github.com/users/bmizerany/followers')
            .then(response => response.json())
            .then(data => data)

            setItens(result)
        }
        fetchData()
    }, [])
    
    return (
       <div className="App">
           {itens.map(item => {
               return <div><span>{item.id}</span><span>{item.login}</span></div>
           })}
       </div>
    );
 }

 export default App;