import {Action, Reducer} from "../types/types";


export function createStore<S, A extends Action>(reducer: Reducer<S, A>, initialState: S) {
    let state = initialState
    return {
        dispatch(action: A) {
            state = reducer(state, action)
        },
        getState(): S {
            return state
        },
    }
}


