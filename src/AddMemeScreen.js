import { useState } from "react";

export function AddMemeScreen(props) {
    const [inputs, setInputs] = useState({});

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({ ...values, [name]: value }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        props.memesArray.push({ id: props.memesArray.length + 1, title: inputs.title, upvotes: 0, downvotes: 0, img: inputs.img })
        setInputs([])
        console.log(props.memesArray)
    }

    const isValid = false

    return (
        <form onSubmit={handleSubmit}>
            <label>Enter meme title:
                <input
                    type="text"
                    name="title"
                    value={inputs.title || ""}
                    onChange={handleChange}
                    required
                />
            </label>
            <label>Enter image url:
                <input
                    type="text"
                    name="img"
                    value={inputs.img || ""}
                    onChange={handleChange}
                    required
                />
            </label>
            <input type="submit" value="Send!" />
        </form>
    )
}