export function AddMemeScreen(props) {
    let test = () => {
        // props.memesArray = [...props.memesArray, { title: "Hello", upvotes: 1, downvotes: 1 }]
        // console.log(props.memesArray)
        props.memesArray.push({ title: "Hello", upvotes: 1, downvotes: 1 })
        console.log(props.memesArray)
    }

    return (
        <div>
            <button type="button" onClick={props.test}> Add test</button>
            <button type="button" onClick={test}> Add to array</button>
        </div >
    );
};
