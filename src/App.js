import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

import './App.css';
import Main from './components/MainComponent';

const store = ConfigureStore();

console.log(store);

class App extends Component{

    render(){
        return(
            <Provider store={store}>
                <BrowserRouter store={store}>
                    <div className="App">
                        <Main />
                    </div>
                </BrowserRouter>
            </Provider>
        );
    }
}

export default App;
