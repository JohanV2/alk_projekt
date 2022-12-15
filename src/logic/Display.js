import { AddMeme } from "./AddMeme";

import "./Display.scss"

export function Display(props) {

    return (
        <div class="memes">
            {props.memesArray.map(meme => {
                const switchDownOff = () => {
                    if (meme.upvotes.includes(props.userName)) {
                        meme.downAble = !meme.downAble
                    }
                }
                const switchUpOff = () => {
                    if (meme.downvotes.includes(props.userName)) {
                        meme.upAble = !meme.upAble
                    }
                }
                return (
                    <div class="meme">
                        <div key={meme.id}>
                            <h2>{meme.title}</h2>
                            <img src={meme.img} loading="lazy" alt={meme.title} />
                            <div class="buttons">
                                <button onClick={() => {
                                    meme.upvotes.push(props.userName)
                                    console.log(`godmode on upvoting start is ${props.GODMODE}`)
                                    props.onVote()
                                    if (props.GODMODE === false) {
                                        switchDownOff()
                                    }
                                }} disabled={!meme.upAble}>
                                    🢁 {meme.upvotes.length}</button>
                                <button onClick={() => {
                                    meme.downvotes.push(props.userName)
                                    props.onVote()
                                    if (props.GODMODE === false) {
                                        switchUpOff()
                                    }
                                }} disabled={!meme.downAble}>
                                    🢃 {meme.downvotes.length}</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                );
            }).reverse()}
            <AddMeme memesArray={props.memesArray} />
        </div >
    )
}
