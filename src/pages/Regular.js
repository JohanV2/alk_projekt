import { useState } from 'react'
import { Display } from '../logic/Display'

export function Regular(props) {
    const filtered = props.memesArray.filter(meme => {
        return (!(meme.upvotes.length - meme.downvotes.length > 5))
    })

    const [memes, setMemes] = useState(props.memesArray)
    function onVote() {
        setMemes([memes])
    }


    return (
        <Display memesArray={filtered} onVote={onVote} GODMODE={props.GODMODE} userName={props.userName} />
    )
}
