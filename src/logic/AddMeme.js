import { useNavigate } from "react-router-dom";
import "./AddMeme.scss"

export function AddMeme() {

    let navigate = useNavigate();
    const routeChange = () => {
        navigate("/addmeme");
    }

    return (
        <div class="footer">
            <p>Want more memes?</p>
            <button type="button" onClick={routeChange}> Add new!</button>
        </div >
    );
};
