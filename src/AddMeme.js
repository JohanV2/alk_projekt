export function AddMeme(props) {
    console.log(props.test)

    return (
        <div>
            <button type="button" onClick={props.test}> Add new</button>
        </div >
    );
};
