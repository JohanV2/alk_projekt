import { useState } from 'react'
import { Display } from './Display'

export function Hot(props) {
    const filtered = props.memesArray.reverse().filter(meme => {
        return (meme.upvotes - meme.downvotes > 5)
    })

    const [memes, setMemes] = useState(props.memesArray)
    function onVote() {
        setMemes([memes])
    }


    return (
        <Display memesArray={filtered} onVote={onVote} />
    )
}
