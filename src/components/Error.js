import { useRouteError } from "react-router-dom";


const Error = () => {
    const err = useRouteError();
    console.log(err);
    return (
        <div>
            <h1>
                opps!something went wrong 
            </h1>
            <h3>
                {err.status}:{err.statustext}
            </h3>
        </div>
    )
};
export default Error;