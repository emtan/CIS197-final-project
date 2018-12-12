import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import SubscribeLayout from './components/SubscribeLayout';
import Layout from './components/Layout';
import UploadForm from './components/UploadForm';
import PetProfile from './components/PetProfile';
import ProfileLayout from './components/ProfileLayout';
import Post from './components/Post';
import { Provider } from 'react-redux';

class App extends Component {
  state = {
    data: null
  };

  componentDidMount() {
  }

  render() {
    return (
        <BrowserRouter>
          <Layout>
            <Route exact path="/" component={Home} />
            <Route path="/subscribe" component={SubscribeLayout} />
            <Route path="/upload" component={UploadForm} />
            <Route path="/profile" component={ProfileLayout} />
          </Layout>
        </BrowserRouter>
    );
  }
}

export default App;