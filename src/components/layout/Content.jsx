import './Content.css'
import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Home from '../../views/examples/Home'
import NotFound from '../../views/examples/NotFound'
import UseState from '../../views/examples/UseState'
import UseEffect from '../../views/examples/UseEffect'
import UseRef from '../../views/examples/UseRef'
import UseCallback from '../../views/examples/UseCallback'
import UseMemo from '../../views/examples/UseMemo'
import UseContext from '../../views/examples/UseContext'
import UseReducer from '../../views/examples/UseReducer'
import UseCustom from '../../views/examples/UseCustom'

const Content = props => (
    <main className="Content">
        <Switch>
            <Route exact path="/react-hooks-cod3r">
                <Home />
            </Route>
            <Route path="/react-hooks-cod3r/useState">
                <UseState />
            </Route>
            <Route path="/react-hooks-cod3r/useEffect">
                <UseEffect />
            </Route>
            <Route path="/react-hooks-cod3r/useRef">
                <UseRef />
            </Route>
            <Route path="/react-hooks-cod3r/useCallback">
                <UseCallback />
            </Route>
            <Route path="/react-hooks-cod3r/useMemo">
                <UseMemo />
            </Route>
            <Route path="/react-hooks-cod3r/useContext">
                <UseContext />
            </Route>
            <Route path="/react-hooks-cod3r/useReducer">
                <UseReducer />
            </Route>
            <Route path="/react-hooks-cod3r/useCustom">
                <UseCustom />
            </Route>
            <Route path="*">
                <NotFound />
            </Route>
        </Switch>
    </main>
)

export default Content