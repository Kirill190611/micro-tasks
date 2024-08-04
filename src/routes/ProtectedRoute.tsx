import {ReactNode} from "react";
import {Navigate} from "react-router-dom";

type Props = {
    children: ReactNode
}

export const ProtectedRoute = ({children}: Props) => {
    const logged = false;

    return (
        <div>
            {
                logged ? children : <Navigate to={'/error'}/>
            }
        </div>
    );
};