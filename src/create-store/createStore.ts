import {Action, Reducer} from "../types/types";


export function createStore<S, A extends Action>(reducer: Reducer<S, A>) {
    let state = reducer({} as S, {type: ''} as A)
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


