import { Display } from '../logic/Display'

export function Regular(props) {


    const { memes, setMemes } = props


    const onVote = (meme) => {
        setMemes(memes.map(memeItem => {
            if (meme.id === memeItem.id) {
                return meme
            }
            return memeItem
        }))
        console.log(memes)
    }
    const filtered = memes.filter(meme => {
        return (!(meme.upvotes.length - meme.downvotes.length > 5))
    })
    return (
        <Display memesArray={filtered} onVote={onVote} GODMODE={props.GODMODE} userName={props.userName} />
    )
}
