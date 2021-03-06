import appReducer from './reducers'
import { createStore, applyMiddleware } from 'redux'

const cosnoleMessages = store => next => action => {

    let result

    console.groupCollapsed(`dispatching action => ${action.type}`)
    console.log('Before dispatching ---> ski days', store.getState().allSkiDays.length)

    result = next(action)

    let { allSkiDays, goal, errors, resortNames } = store.getState()

    console.log(`After dispatching ---> 
        ski days: ${allSkiDays.length}
        goal: ${goal}
        fetching: ${resortNames.fetching}
        suggestions: ${resortNames.suggestions}
        errors: ${errors.length}
    `)

    console.groupEnd()

    return result

};


export default (initialState={}) => {
    return applyMiddleware(cosnoleMessages)(createStore)(appReducer, initialState)
}

