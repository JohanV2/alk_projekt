import { useNavigate } from "react-router-dom";

export function AddMeme(props) {
    console.log(props.test)

    let navigate = useNavigate();
    const routeChange = () => {
        navigate("/addmeme");
    }

    return (
        <div>
            {/* <button type="button" onClick={props.test}> Add new</button> */}
            <button type="button" onClick={routeChange}> Add new</button>
        </div >
    );
};
