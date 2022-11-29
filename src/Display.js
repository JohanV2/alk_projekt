export function Display(props) {
    console.log(props)

    return (
        <div>
            {props.memesArray.map(meme => {
                return (
                    <div key={meme.id}>
                        <h2>title: {meme.title}</h2>
                        <h2>upvotes: {meme.upvotes}</h2>
                        <h2>downvotes: {meme.downvotes}</h2>
                        <hr />
                        <button onClick={() => {
                            meme.upvotes += 1
                            props.onVote()
                        }}>
                            Upvote</button>
                        <button onClick={() => {
                            meme.downvotes += 1
                            props.onVote()
                        }}>
                            Downvote</button>
                    </div>
                );
            })}
        </div>
    )
}
