import { useState } from 'react'

export function Hot({memesArray}) {

    // const memesArray = require('./memes.json')

    const filtered = memesArray.filter(meme => {
        return (meme.upvotes - meme.downvotes > 5)
    })

    const [memes, setMemes] = useState(memesArray)
    function onVote() {
        setMemes([...memesArray])
        console.log(memesArray)
    }


    return (
        <div>
            {filtered.map(meme => {
                return (
                    <div key={meme.id}>
                        <h2>title: {meme.title}</h2>
                        <h2>upvotes: {meme.upvotes}</h2>
                        <h2>downvotes: {meme.downvotes}</h2>
                        <hr />
                        <button onClick={() => {
                            meme.upvotes += 1
                            onVote()
                        }}>
                            Upvote</button>
                        <button onClick={() => {
                            meme.downvotes += 1
                            onVote()
                        }}>
                            Downvote</button>
                    </div>
                );
            })}
        </div>
    )
}
