import { useState } from 'react'
import { Display } from './Display'

export function Main(props) {

    const memesArray = props.memesArray
    const [memes, setMemes] = useState(props.memesArray)
    function onVote() {
        setMemes([memes])
    }

    const t = props.test
    return (
        <Display onVote={onVote} memesArray={memesArray} test={t} />
    )
}
