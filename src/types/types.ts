import {createStore} from "../create-store/createStore";

export interface Action<T = any> {
    type: T
}

export interface AnyAction extends Action {
    [extraProps: string]: any
}

export type Reducer<S = any, A extends Action = AnyAction> = (
    state: S | undefined,
    action: A
) => S


//for combine reducers
declare const $CombinedState: unique symbol

interface EmptyObject {
    readonly [$CombinedState]?: undefined
}

export type ReducersMapObject<S = any, A extends Action = Action> = {
    [K in keyof S]: Reducer<S[K], A>
}

export type CombinedState<S> = EmptyObject & S
export type StoreType = ReturnType<typeof createStore>