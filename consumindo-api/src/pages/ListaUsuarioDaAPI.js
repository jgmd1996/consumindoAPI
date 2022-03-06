import { useEffect, useState } from 'react'
//import { useDispatch, useSelector } from "react-redux";



    function ListaUsuarioDaAPI() {



        //tela cadastro
       // const { itens: cu } = useSelector(state => state.shop)
       // const dispatch = useDispatch();
        // final de cadastro
        const [itens, setItens] = useState([])
        const [user, setUser] = useState({
            
            login: '',
            id: '',
            node_id: '',
            avatar_url: '',
            gravatar_id: '',
            url: '',
            html_url: '',
            followers_url: '',
            following_url: '',
            gists_url: '',
            starred_url: '',
            subscriptions_url: '',
            organizations_url: '',
            repos_url: '',
            events_url: '',
            received_events_url: '',
            type: '',
            site_admin: '',

        })



        useEffect(() => {
            async function fetchMyAPI() {
              let response = await fetch(`https://api.github.com/users`)
              const users = await response.json()
              setItens(users)
              console.log(users)
            }
        
            fetchMyAPI()
          }, [])

        // const goToCheckout = () => {
        //     dispatch({ type: 'SET_CUSTOMER', itens });
        // }
        console.log(itens)
        return (
            <div className="App">
                <table style={{border: "1px solid"}}>
                    <th>login</th>
                    <th>id</th>
                    <th>node_id</th>
                {itens.map(item => {
                    //lista todas as linha e colunas 
                    return <tr style={{border: "1px solid"}}>
                        <td style={{border: "1px solid"}}>{item.login}</td>
                        <td style={{border: "1px solid"}}>{item.id}</td>
                        <td style={{border: "1px solid"}}>{item.node_id}</td>
                        <td><img width={"100"} height={"100"} src={item.avatar_url}/></td>
                        <td>{item.gravatar_id}</td>
                        <td>{item.url}</td>
                        <td>{item.html_url}</td>
                        <td>{item.followers_url}</td>
                        <td>{item.following_url}</td>
                        <td>{item.gists_url}</td>
                        <td>{item.starred_url}</td>
                        <td>{item.subscriptions_url}</td>
                        <td>{item.organizations_url}</td>
                        <td>{item.repos_url}</td>
                        <td>{item.events_url}</td>
                        <td>{item.received_events_url}</td>
                        <td>{item.type}</td>
                        <td>{item.site_admin}</td>
                    </tr>

                })}
                </table>


                <div className="clo-6">
                    <h2 className="text-center">
                        Registrar novo usuario do gitHub
                    </h2>
                    

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="type"
                        onChange={(e) => {
                            setItens({ ...itens, login: e.target.value });
                        }}
                    />
                    

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="id"
                        onChange={(e) => {
                            setItens({ ...itens, id: e.target.value });
                        }}
                    />
                    

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="node_id"
                        onChange={(e) => {
                            setItens({ ...itens, node_id: e.target.value });
                        }}
                    />
                    

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="avatar_url"
                        onChange={(e) => {
                            setItens({ ...itens, avatar_url: e.target.value });
                        }}
                    />
                    

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="gravatar_id"
                        onChange={(e) => {
                            setItens({ ...itens, gravatar_id: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="url"
                        onChange={(e) => {
                            setItens({ ...itens, url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="html_url"
                        onChange={(e) => {
                            setItens({ ...itens, html_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="followers_url"
                        onChange={(e) => {
                            setItens({ ...itens, followers_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="following_url"
                        onChange={(e) => {
                            setItens({ ...itens, following_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="gists_url"
                        onChange={(e) => {
                            setItens({ ...itens, gists_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="starred_url"
                        onChange={(e) => {
                            setItens({ ...itens, starred_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="subscriptions_url"
                        onChange={(e) => {
                            setItens({ ...itens, subscriptions_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="organizations_url"
                        onChange={(e) => {
                            setItens({ ...itens, organizations_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="repos_url"
                        onChange={(e) => {
                            setItens({ ...itens, repos_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="events_url"
                        onChange={(e) => {
                            setItens({ ...itens, events_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="received_events_url"
                        onChange={(e) => {
                            setItens({ ...itens, received_events_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="type"
                        onChange={(e) => {
                            setItens({ ...itens, type: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="site_admin"
                        onChange={(e) => {
                            setItens({ ...itens, site_admin: e.target.value });
                        }}
                    />
                    
                    {/* <button onClick={() => goToCheckout()} className="btn btn-lg btn-block btn-secondary">
                        finalizar pedido
                    </button> */}


                </div>
            </div>




        );
    }

export default ListaUsuarioDaAPI;