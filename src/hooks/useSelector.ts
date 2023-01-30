import {useContext} from "react";
import {Context} from "../provider/Provider";

export const useSelector = <S>() => {
    const store = useContext(Context)
    return store.getState() as S
}