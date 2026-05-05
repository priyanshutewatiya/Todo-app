import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducer'

// Middleware for logging actions (optional)
const loggerMiddleware = store => next => action => {
    console.log('Dispatching:', action)
    const result = next(action)
    console.log('Next State:', store.getState())
    return result
}

// Middleware for handling async actions (optional)
const thunkMiddleware = store => next => action => {
    if (typeof action === 'function') {
        return action(store.dispatch, store.getState)
    }
    return next(action)
}

// Enable Redux DevTools if available
const composeEnhancers = 
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
        ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            trace: true,
            traceLimit: 25,
        })
        : compose

// Create store with middleware
const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(loggerMiddleware, thunkMiddleware))
)

// Subscribe to store changes (optional)
store.subscribe(() => {
    console.log('Store updated:', store.getState())
})

export default store
