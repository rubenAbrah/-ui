import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx' 

import { StateMachineProvider, createStore } from "little-state-machine";


createStore({});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

<StateMachineProvider>
    <App />

    </StateMachineProvider>
  </React.StrictMode>,
)
