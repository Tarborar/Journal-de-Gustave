import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/main.scss'
import './styles/utils/normalize.scss'

import Header from './components/Header'

import Home from './pages/Home'
import Pictos from './pages/Pictos'
import Armes from './pages/Armes'
import Journaux from './pages/Journaux'
import Gestrals from './pages/Gestrals'
import Disques from './pages/Disques'

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/pictos" element={<Pictos />}></Route>
                    <Route path="/armes" element={<Armes />}></Route>
                    <Route path="/journaux" element={<Journaux />}></Route>
                    <Route path="/gestrals" element={<Gestrals />}></Route>
                    <Route path="/disques" element={<Disques />}></Route>
                </Routes>
        </BrowserRouter>
    </StrictMode>,
)
