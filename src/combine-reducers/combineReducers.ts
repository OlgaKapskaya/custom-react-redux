import {AnyAction, CombinedState, Reducer, ReducersMapObject} from "../types/types";

export function combineReducers<S>(reducers: ReducersMapObject<S, any>):Reducer<CombinedState<S>> {
    return function combinationReducer(state: any, action: AnyAction) {
        const nextState:any = {}

        Object.entries(reducers).forEach(([key, reducer]) => {
            // @ts-ignore
            nextState[key] = reducer(state[key], action)
        })
        return nextState
    }
}