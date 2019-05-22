import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { MuiThemeProvider } from '@material-ui/core/styles'
import * as serviceWorker from './serviceWorker'
import { theme } from './theme/muiTheme'
import { store, persistor } from './redux/store'
import App from './App'

const rootElement = document.getElementById('root')

ReactDOM.render(
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </PersistGate>
    </Provider>,
    rootElement
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
serviceWorker.unregister()
