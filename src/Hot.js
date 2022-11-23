import { useState } from 'react'

export function Hot() {

    const memesArray = require('./memes.json')
    console.log(memesArray)

    const filtered = memesArray.filter(meme => {
        return (meme.upvotes - meme.downvotes > 5)
    })

    const [upvotes, setUpvotes] = useState(0)

    return (
        <div>
            {filtered.map(meme => {
                return (
                    <div key={meme.id}>
                        <h2>{meme.title}</h2>
                        <h2>{meme.upvotes}</h2>
                        <p>stan upvotów: {upvotes}</p>
                        <button onClick={() => setUpvotes(upvotes + 1)}>Upvote</button>
                    </div>
                );
            })}
        </div>
    );
}