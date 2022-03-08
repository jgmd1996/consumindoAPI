import React from "react";
import ListaUsuarioDaAPI from './pages/ListaUsuarioDaAPI'

function App (){
    return(
    <div className="App" id="root">
        <ListaUsuarioDaAPI></ListaUsuarioDaAPI>

    </div>
    );
}

export default App;

// import React from "react"

// export default function App() {
//      const [usersGit, setUsersGit] = React.useState([])
//     // const [user, setUser] = React.useState({
//     //     login,
//     //     id,
//     //     node_id,
//     //     avatar_url,
//     //     gravatar_id,
//     //     url,
//     //     html_url,
//     //     followers_url,
//     //     following_url,
//     //     gists_url,
//     //     starred_url,
//     //     subscriptions_url,
//     //     organizations_url,
//     //     repos_url,
//     //     events_url,
//     //     received_events_url,
//     //     type,
//     //     site_admin,
//     // })



//     React.useEffect(() => {
//         async function fetchMyAPI() {
//           let response = await fetch(`https://api.github.com/users`)
//           const users = await response.json()
//           setUsersGit(users)
//           console.log(users)
//         }
    
//         fetchMyAPI()
//       }, [])

//     return (
//         //
//                 usersGit.map(item => {
//                     return <div>
//                         <span>{item.login}</span><br />
//                         <span>{item.id}</span><br />
//                         <span>{item.node_id}</span><br />
//                         <span>{item.avatar_url}</span><br />
//                         <span>{item.gravatar_id}</span><br />
//                         <span>{item.url}</span><br />
//                         <span>{item.html_url}</span><br />
//                         <span>{item.followers_url}</span><br />
//                         <span>{item.following_url}</span><br />
//                         <span>{item.gists_url}</span><br />
//                         <span>{item.starred_url}</span><br />
//                         <span>{item.subscriptions_url}</span><br />
//                         <span>{item.organizations_url}</span><br />
//                         <span>{item.repos_url}</span><br />
//                         <span>{item.events_url}</span><br />
//                         <span>{item.received_events_url}</span><br />
//                         <span>{item.type}</span><br />
//                         <span>{item.site_admin}</span><br />
//                     </div>

//                 })
                
//     )
    
// }


