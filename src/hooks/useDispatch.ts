import {useContext} from "react";
import {Context} from "../provider/Provider";

export const useDispatch = () => {
    const { dispatch } = useContext(Context)
    return dispatch
}