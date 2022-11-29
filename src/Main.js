import { useState } from 'react'
import { Display } from './Display'

export function Main(props) {

    const memesArray = props.memesArray
    const [memes, setMemes] = useState(props.memesArray)
    function onVote() {
        setMemes([memes])
    }


    return (
        <Display onVote={onVote} memesArray={memesArray} />
    )
}
