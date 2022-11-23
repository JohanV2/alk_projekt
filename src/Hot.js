import { useState } from 'react'

export function Hot() {

    const memesArray = require('./memes.json')

    const filtered = memesArray.filter(meme => {
        return (meme.upvotes - meme.downvotes > 5)
    })

    const [memes, setMemes] = useState(filtered)
    function onVote() {
        setMemes([...filtered])
    }

    return (
        <div>
            {filtered.map(meme => {
                return (
                    <div key={meme.id}>
                        <h2>title: {meme.title}</h2>
                        <h2>upvotes: {meme.upvotes}</h2>
                        <hr />
                        <button onClick={() => {
                            meme.upvotes += 1
                            onVote()
                        }}>
                            Upvote</button>
                    </div>
                );
            })}
        </div>
    )
}
