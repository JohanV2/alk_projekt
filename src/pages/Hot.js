import { Display } from '../logic/Display'

export function Hot(props) {
    const { memes } = props

    const filtered = memes.filter(meme => {
        return (meme.upvotes.length - meme.downvotes.length > 5)
    })


    return (
        <Display memesArray={filtered} onVote={props.onVote} GODMODE={props.GODMODE} userName={props.userName} />
    )
}
