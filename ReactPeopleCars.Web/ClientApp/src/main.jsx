import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home';
import { BrowserRouter } from 'react-router-dom';
import PersonForm from './PersonForm';
import CarForm from './CarForm';
import Delete from './Delete';
import Layout from './Layout';
import { Route } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout>
            <Route exact path='/' component={Home} />
            <Route exact path='/personform' component={PersonForm} />
            <Route exact path='/carform/:id' component={CarForm} />
            <Route exact path='/delete/:id' component={Delete} />
        </Layout>
    </BrowserRouter>
)
