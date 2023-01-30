import {Action, Reducer} from "../types/types";


export function createStore<S, A extends Action>(reducer: Reducer<S, A>, initialState: S) {
    let state = initialState
    //@ts-ignore
    let callSubscriber = () => {}
    return {
        dispatch(action: A) {
            state = reducer(state, action)
            callSubscriber()
        },
        getState(): S {
            return state
        },
        subscribe: (observer: () => void) => {
            callSubscriber = observer
        }
    }
}


