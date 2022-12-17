import { Display } from '../logic/Display'

export function Main(props) {

    return (
        <Display onVote={props.onVote} memesArray={props.memes} GODMODE={props.GODMODE} userName={props.userName} />
    )
}

