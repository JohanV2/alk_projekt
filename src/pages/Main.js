import { useState } from 'react'
import { Display } from '../logic/Display'

export function Main(props) {

    const memesArrayReversed = props.memesArray
    const [memes, setMemes] = useState(props.memesArray)

    function onVote() {
        setMemes([memes])
    }

    // function onGodModeOn() {
    //     props.memesArray.map(meme => {
    //         meme.upAble = true
    //         meme.downAble = true
    //     })
    //     setMemes([memes])
    // }

    return (
        <Display onVote={onVote} memesArray={memesArrayReversed} GODMODE={props.GODMODE} BTN={props.BTN} />
    )
}

