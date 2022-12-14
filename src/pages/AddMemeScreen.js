import { useState } from "react";
import "./AddMemeScreen.scss"

export function AddMemeScreen(props) {
    const { memes, setMemes } = props

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
            return alert("Title to long! Max 30 characters")
        }
        if (!validUrl.isUri(inputs.img)) {
            return alert("Image path must be a valid URL")
        }
        memes.push({ id: memes.length + 1, title: inputs.title, upvotes: [], downvotes: [], img: inputs.img })
        setInputs([])
        alert("Success! Meme added!")
        setMemes(memes)
    }


    return (
        <div className="add-meme-wrapper">
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
                <input className="send" type="submit" value="Send!" />
            </form>
        </div>
    )
}