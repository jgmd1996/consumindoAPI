function ListaUsuarioDaAPI(){
    return(
        <div>
        <h1>Lista</h1>
        <p>Conteudo da pagina</p>
        </div>
    )
}

export default ListaUsuarioDaAPI;





// import { useEffect, useState} from 'react'



// function ListaUsuarioDaAPI() {

//     const [itens, setItens] = useState([])

//     useEffect(() => {
//         const fetchData = async () => {
//            const result = await fetch('https://api.github.com/users/bmizerany/followers')
//             .then(response => response.json())
//             .then(data => data)

//             setItens(result)
//         }
//         fetchData()
//     }, [])
    
//     return (
//        <div className="App">
//            {itens.map(item => {
//                return <div>
//                  <span>{item.login}</span>
//                  <span>{item.id}</span>
//                  <span>{item.node_id}</span>
//                  <span>{item.avatar_url}</span>
//                  <span>{item.gravatar_id}</span>
//                  <span>{item.url}</span>
//                  <span>{item.html_url}</span>
//                  <span>{item.followers_url}</span>
//                  <span>{item.following_url}</span>
//                  <span>{item.gists_url}</span>
//                  <span>{item.starred_url}</span>
//                  <span>{item.subscriptions_url}</span>
//                  <span>{item.organizations_url}</span>
//                  <span>{item.repos_url}</span>
//                  <span>{item.events_url}</span>
//                  <span>{item.received_events_url}</span>
//                  <span>{item.type}</span>
//                  <span>{item.site_admin}</span>
//                  </div>
//            })}
//        </div>
//     );
//  }

//  export default ListaUsuarioDaAPI;