import {useContext} from "react";
import {Context} from "../provider/Provider";

export const useSelector = <S,A>(selector: (state: S) => A) => {
    const store = useContext(Context)
    const state = store.getState() as S
    return selector(state)
}