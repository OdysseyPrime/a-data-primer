import React, {Suspense} from 'react'
import 'assets/app.css'
import ThemeProvider from 'utils/ThemeProvider'
import {Route, Router, Switch} from 'react-router-dom'
import Factory from 'pages/Factory'
import {history} from 'Store'

const App = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Router basename={BASE_URL} history={history}>
                <ThemeProvider>
                    <Switch>
                        <Route path="/lecture/:id/" component={Factory}/>
                        <Route path="/" component={Factory}/>
                    </Switch>
                </ThemeProvider>
            </Router>
        </Suspense>
    )
}

export default App
