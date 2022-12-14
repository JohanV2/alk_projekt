import { useState } from "react";
import "./AddMemeScreen.scss"

export function AddMemeScreen(props) {
    const validUrl = require('valid-url');
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!inputs.title) {
            return alert("Title can not be empty")
        }
        if (inputs.title.length > 30) {
            return alert("Title too long! Max 30 characters")
        }
        if (!validUrl.isUri(inputs.img)) {
            return alert("Image path must be a valid URL")
        }
        props.memesArray.push({ id: props.memesArray.length + 1, title: inputs.title, upvotes: 0, downvotes: 0, img: inputs.img, upAble: true, downAble: true })
        setInputs([])
        console.log(props.memesArray)
    }

    return (
        <div class="add-meme-wrapper">
            <form onSubmit={handleSubmit}>
                <label>Enter meme title:
                    <input
                        type="text"
                        name="title"
                        value={inputs.title || ""}
                        onChange={handleChange}

                    />
                </label>
                <label>Enter image url:
                    <input
                        type="text"
                        name="img"
                        value={inputs.img || ""}
                        onChange={handleChange}
                    />
                </label>
                <input class="send" type="submit" value="Send!" />
            </form>
        </div>
    )
}