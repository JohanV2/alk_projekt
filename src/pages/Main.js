import { Display } from '../logic/Display'

export function Main(props) {

    const { memes, setMemes } = props

    const onVote = (meme) => {
        setMemes(memes.map(memeItem => {
            if (meme.id === memeItem.id) {
                return meme
            }
            return memeItem
        }))
    }
    return (
        <Display onVote={onVote} memesArray={memes} GODMODE={props.GODMODE} userName={props.userName} />
    )
}

