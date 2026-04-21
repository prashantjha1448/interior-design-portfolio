import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { DataContextProvider } from './context/DataContext.jsx'
import { AuthContextProvider } from './context/AuthContext.jsx'

createRoot(document.getElementById('root')).render(
        <BrowserRouter>
                <AuthContextProvider>
                        <DataContextProvider>
                                <App />
                        </DataContextProvider>
                </AuthContextProvider>
        </BrowserRouter>

)
