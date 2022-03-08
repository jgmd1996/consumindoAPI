import React from 'react';

import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from "react-redux";





    // aqui e o componente 
    function ListaUsuarioDaAPI() {
        const dispatch = useDispatch();
       // O useState e para definir o estado, somente no componente em que foi declarado no caso aqui foi no itens
        
        
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
        const { user: cu } = useSelector(state => state.usuarioCadastrado)//v oltar aqui??????  duvida

       // console.log(user)
        // O useEffect e uma ferramenta que alcilia a escutar um bloco de codigos dentro dele a parti das alteraçoes das
        // dependencias definidas , caso não tenha nenhuma dependencia o bloco de codigo sera esxecutado apenas uma vez 
        // quando o componente em que ela esta for carregado.
           useEffect(() => {
             console.log(cu)
            
         }, [cu])

          const goToCheckout = () => {
             dispatch({ type: 'SET_CUSTOMER', user });//duvida
          }

//********************************* Aparti daqui e para consumir a api e mosra ela em uma tabela  *************************************************************** */
        const [itens, setItens] = useState([])
        useEffect(() => {
            async function fetchMyAPI() {
              let response = await fetch(`https://api.github.com/users`)
              const usuariosDaAPI = await response.json()
              setItens(usuariosDaAPI)
              
            }
        
            fetchMyAPI()
          }, [])// aqui fica as dependencias []
          //toda vez que o valor da dependia mudar o useEffect sera executado novamente.

        
        return (
            <div className="App">
                <table style={{border: "1px solid"}}>
                    <th>login</th>
                    <th>id</th>
                    <th>node_id</th>
                {itens.map(item => {
                    
                    return <tr style={{border: "1px solid"}}>
                        <td style={{border: "1px solid"}}>{item.login}</td>
                        <td style={{border: "1px solid"}}>{item.id}</td>
                        <td style={{border: "1px solid"}}>{item.node_id}</td>
                        <td><img width={"100"} height={"100"} src={item.avatar_url}/></td>
                        <td style={{border: "1px solid"}}>{item.gravatar_id}</td>
                        <td style={{border: "1px solid"}}>{item.url}</td>
                        <td style={{border: "1px solid"}}>{item.html_url}</td>
                        <td style={{border: "1px solid"}}>{item.followers_url}</td>
                        <td style={{border: "1px solid"}}>{item.following_url}</td>
                        <td style={{border: "1px solid"}}>{item.gists_url}</td>
                        <td style={{border: "1px solid"}}>{item.starred_url}</td>
                        <td style={{border: "1px solid"}}>{item.subscriptions_url}</td>
                        <td style={{border: "1px solid"}}>{item.organizations_url}</td>
                        <td style={{border: "1px solid"}}>{item.repos_url}</td>
                        <td style={{border: "1px solid"}}>{item.events_url}</td>
                        <td style={{border: "1px solid"}}>{item.received_events_url}</td>
                        <td style={{border: "1px solid"}}>{item.type}</td>
                        <td style={{border: "1px solid"}}>{item.site_admin}</td>
                    </tr>

                })}
                </table>
    {/* a****************** Aqui e final de consumir a api e mostra na tabela***************************************** */}


                <div className="clo-6">
                    <h2 className="text-center">
                        Registrar novo usuario do gitHub
                    </h2>
                    

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="type"
                        onChange={(e) => {
                            setUser({ ...itens, login: e.target.value });
                        }}
                    />
                    

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="id"
                        onChange={(e) => {
                            setUser({ ...itens, id: e.target.value });
                        }}
                    />
                    

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="node_id"
                        onChange={(e) => {
                            setUser({ ...itens, node_id: e.target.value });
                        }}
                    />
                    

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="avatar_url"
                        onChange={(e) => {
                            setUser({ ...itens, avatar_url: e.target.value });
                        }}
                    />
                    

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="gravatar_id"
                        onChange={(e) => {
                            setUser({ ...itens, gravatar_id: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="url"
                        onChange={(e) => {
                            setUser({ ...itens, url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="html_url"
                        onChange={(e) => {
                            setUser({ ...itens, html_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="followers_url"
                        onChange={(e) => {
                            setUser({ ...itens, followers_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="following_url"
                        onChange={(e) => {
                            setUser({ ...itens, following_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="gists_url"
                        onChange={(e) => {
                            setUser({ ...itens, gists_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="starred_url"
                        onChange={(e) => {
                            setUser({ ...itens, starred_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="subscriptions_url"
                        onChange={(e) => {
                            setUser({ ...itens, subscriptions_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="organizations_url"
                        onChange={(e) => {
                            setUser({ ...itens, organizations_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="repos_url"
                        onChange={(e) => {
                            setUser({ ...itens, repos_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="events_url"
                        onChange={(e) => {
                            setUser({ ...itens, events_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="received_events_url"
                        onChange={(e) => {
                            setUser({ ...itens, received_events_url: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="type"
                        onChange={(e) => {
                            setUser({ ...itens, type: e.target.value });
                        }}
                    />
                    
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="site_admin"
                        onChange={(e) => {
                            setUser({ ...itens, site_admin: e.target.value });
                        }}
                    />
                    
                    <button onClick={() => goToCheckout()} className="btn btn-lg btn-block btn-secondary">
                        finalizar pedido
                    </button>


                </div>
            </div>




        );
    }

export default ListaUsuarioDaAPI;