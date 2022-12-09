import { useState } from 'react'
import { Display } from './Display'

export function Main(props) {

    const memesArrayReversed = props.memesArray.reverse()
    const [memes, setMemes] = useState(props.memesArray)
    function onVote() {
        setMemes([memes])
    }

    const t = props.test
    return (
        <Display onVote={onVote} memesArray={memesArrayReversed} test={t} />
    )
}
