import storeFactory from './store'
import { addDay, removeDay, setGoal } from './actions'

// const initialState = (localStorage['redux-store']) ?
//     JSON.parse(localStorage['redux-store']) :
//     {}
//
// const saveState = () => {
//     const state = JSON.stringify(store.getState())
//     localStorage['redux-store'] = state
// }

// const store = storeFactory(initialState)
const store = storeFactory()

store.dispatch(addDay("Heavenly", "2016-12-22"));
store.dispatch(removeDay("2016-12-22"));
store.dispatch(setGoal(66));

//
// store.subscribe(saveState)
//
// store.dispatch({
//     type: C.ADD_DAY,
//     payload: {
//         "resort": "Mt Shasta",
//         "date": "2016-10-28",
//         "powder": true,
//         "backcountry": true
//     }
// })
//
// store.dispatch({
//     type: C.ADD_DAY,
//     payload: {
//         "resort": "Squaw Valley",
//         "date": "2016-3-28",
//         "powder": true,
//         "backcountry": false
//     }
// })
//
// store.dispatch({
//     type: C.ADD_DAY,
//     payload: {
//         "resort": "The Canyons",
//         "date": "2016-1-2",
//         "powder": false,
//         "backcountry": true
//     }
// })