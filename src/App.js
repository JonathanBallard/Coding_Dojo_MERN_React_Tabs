import React, { useState } from 'react';
import logo from './logo.svg';
import Tabs from './components/tabs';
import './App.css';


function App() {
    const props1 = {
        arr:[{label:"tab1", content:"tab1 Content"},{label:"tab2", content:"tab2 Content"},{label:"tab3", content:"tab3 Content"}]
    }
    const props2 = {
        arr:[{label:"tab1", content:"tab1 Content"},{label:"tab2", content:"tab2 Content"},{label:"tab3", content:"tab3 Content"}]
    }

    return (
        <div className="App">
            <Tabs info={props1} ></Tabs>
        </div>
    );
}

export default App;
