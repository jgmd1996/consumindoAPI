import { useState,useEffect } from "react";
import { useDispatch, useSelector } from "react-redux-dom";


const RegistraNovoUsuarioDaAPI = () => {
    const {customer: cu} = useSelector(state => state.shop)
    const dispatch = useDispatch();
    const [customer, setCustomer] = useState({
        external_id: new Date().getTime().toString(),
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
        console.log(cu)
        
    }, [cu])


    const goToCheckout= () => {
        dispatch({ type: 'SET_CUSTOMER', customer });
    }

    return (
        <div className="row">
            <div className="clo-6">
                <h2 className="text-center">
                    Registrar novo usuario do gitHub
                </h2>
                <br />

                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="login"
                    onChange={(e) => {
                        setCustomer({ ...customer, login: e.target.value });
                    }}
                />
                <br/>

                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="id"
                    onChange={(e) => {
                        setCustomer({ ...customer, id: e.target.value });
                    }}
                />
                <br/>

                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="node_id"
                    onChange={(e) => {
                        setCustomer({ ...customer, node_id: e.target.value });
                    }}
                />
                <br/>

                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="avatar_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, avatar_url: e.target.value });
                    }}
                />
                <br/>

                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="gravatar_id"
                    onChange={(e) => {
                        setCustomer({ ...customer, gravatar_id: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="url"
                    onChange={(e) => {
                        setCustomer({ ...customer, url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="html_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, html_url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="followers_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, followers_url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="following_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, following_url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="gists_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, gists_url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="starred_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, starred_url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="subscriptions_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, subscriptions_url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="organizations_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, organizations_url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="repos_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, repos_url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="events_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, events_url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="received_events_url"
                    onChange={(e) => {
                        setCustomer({ ...customer, received_events_url: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="type"
                    onChange={(e) => {
                        setCustomer({ ...customer, type: e.target.value });
                    }}
                />
                <br/>
                <input
                    type="text"
                    className="form-control form-control-lg mb-3"
                    placeholder="site_admin"
                    onChange={(e) => {
                        setCustomer({ ...customer, site_admin: e.target.value });
                    }}
                />
                <br/>

                <button  onClick={() => goToCheckout()} className="btn btn-lg btn-block btn-secondary">
                    finalizar pedido
                </button>

            </div>
        </div>
    )
}

export default RegistraNovoUsuarioDaAPI;