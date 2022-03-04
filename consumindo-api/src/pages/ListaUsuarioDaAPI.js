import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from "react-redux";



    function ListaUsuarioDaAPI() {



        //tela cadastro
        const { itens: cu } = useSelector(state => state.shop)
        const dispatch = useDispatch();
        // final de cadastro
        const [itens, setItens] = useState({
            
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
            const fetchData = async () => {
                const result = await fetch('https://api.github.com/users/bmizerany/followers')
                    .then(response => response.json())
                    .then(data => data)

                setItens(result)
            }
            fetchData()
        }, [cu])

        const goToCheckout = () => {
            dispatch({ type: 'SET_CUSTOMER', itens });
        }
        console.log(itens)
        return (
            <div className="App">
                {itens.map(item => {
                    return <div>
                        <span>{item.login}</span><br />
                        <span>{item.id}</span><br />
                        <span>{item.node_id}</span><br />
                        <span>{item.avatar_url}</span><br />
                        <span>{item.gravatar_id}</span><br />
                        <span>{item.url}</span><br />
                        <span>{item.html_url}</span><br />
                        <span>{item.followers_url}</span><br />
                        <span>{item.following_url}</span><br />
                        <span>{item.gists_url}</span><br />
                        <span>{item.starred_url}</span><br />
                        <span>{item.subscriptions_url}</span><br />
                        <span>{item.organizations_url}</span><br />
                        <span>{item.repos_url}</span><br />
                        <span>{item.events_url}</span><br />
                        <span>{item.received_events_url}</span><br />
                        <span>{item.type}</span><br />
                        <span>{item.site_admin}</span><br />
                    </div>

                })}
                <div className="clo-6">
                    <h2 className="text-center">
                        Registrar novo usuario do gitHub
                    </h2>
                    <br />

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="type"
                        onChange={(e) => {
                            setItens({ ...itens, login: e.target.value });
                        }}
                    />
                    <br />

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="id"
                        onChange={(e) => {
                            setItens({ ...itens, id: e.target.value });
                        }}
                    />
                    <br />

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="node_id"
                        onChange={(e) => {
                            setItens({ ...itens, node_id: e.target.value });
                        }}
                    />
                    <br />

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="avatar_url"
                        onChange={(e) => {
                            setItens({ ...itens, avatar_url: e.target.value });
                        }}
                    />
                    <br />

                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="gravatar_id"
                        onChange={(e) => {
                            setItens({ ...itens, gravatar_id: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="url"
                        onChange={(e) => {
                            setItens({ ...itens, url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="html_url"
                        onChange={(e) => {
                            setItens({ ...itens, html_url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="followers_url"
                        onChange={(e) => {
                            setItens({ ...itens, followers_url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="following_url"
                        onChange={(e) => {
                            setItens({ ...itens, following_url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="gists_url"
                        onChange={(e) => {
                            setItens({ ...itens, gists_url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="starred_url"
                        onChange={(e) => {
                            setItens({ ...itens, starred_url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="subscriptions_url"
                        onChange={(e) => {
                            setItens({ ...itens, subscriptions_url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="organizations_url"
                        onChange={(e) => {
                            setItens({ ...itens, organizations_url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="repos_url"
                        onChange={(e) => {
                            setItens({ ...itens, repos_url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="events_url"
                        onChange={(e) => {
                            setItens({ ...itens, events_url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="received_events_url"
                        onChange={(e) => {
                            setItens({ ...itens, received_events_url: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="type"
                        onChange={(e) => {
                            setItens({ ...itens, type: e.target.value });
                        }}
                    />
                    <br />
                    <input
                        type="text"
                        className="form-control form-control-lg mb-3"
                        placeholder="site_admin"
                        onChange={(e) => {
                            setItens({ ...itens, site_admin: e.target.value });
                        }}
                    />
                    <br />
                    <button onClick={() => goToCheckout()} className="btn btn-lg btn-block btn-secondary">
                        finalizar pedido
                    </button>


                </div>
            </div>




        );
    }

export default ListaUsuarioDaAPI;