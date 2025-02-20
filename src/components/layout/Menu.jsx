import './Menu.css'
import React from 'react'

import { Link } from 'react-router-dom'

const Menu = props => (
    <aside className="Menu">
        <nav>
            <ul>
                <li>
                    <Link to="/react-hooks-cod3r/">Início</Link>
                </li>
                <li>
                    <Link to="/react-hooks-cod3r/useState">useState()</Link>
                </li>
                <li>
                    <Link to="/react-hooks-cod3r/useEffect">useEffect()</Link>
                </li>
                <li>
                    <Link to="/react-hooks-cod3r/useRef">useRef()</Link>
                </li>
                <li>
                    <Link to="/react-hooks-cod3r/useMemo">useMemo()</Link>
                </li>
                <li>
                    <Link to="/react-hooks-cod3r/useCallback">useCallback()</Link>
                </li>
                <li>
                    <Link to="/react-hooks-cod3r/useContext">useContext()</Link>
                </li>
                <li>
                    <Link to="/react-hooks-cod3r/useReducer">useReducer()</Link>
                </li>
                <li>
                    <Link to="/react-hooks-cod3r/useCustom">useMyHook()</Link>
                </li>
            </ul>
        </nav>
    </aside>
)

export default Menu