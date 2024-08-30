import { createContext, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { useState } from 'react';

export const Context = createContext({isAuthenticated: false});

const AppWrapper = ()=>{
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(false);

  return(
    <Context.Provider value={{isAuthenticated, setIsAuthenticated, user, setUser }}>
        <App />
    </Context.Provider>
  )

}

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AppWrapper />
  </StrictMode>,
)
