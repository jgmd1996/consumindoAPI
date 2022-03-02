//import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom'
import Home from "./pages/Home";
//import ListaUsuarioDaAPI from "./pages/ListaUsuarioDaAPI";



function App() {
    console.log(<Home/>)
    return (

        
        <Router>
            
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>

                
            </ul>

            <Routes>
                <Route exact path="/">
                    <Home />
                </Route>
                
            </Routes>


        </Router>

    );
}

export default App;