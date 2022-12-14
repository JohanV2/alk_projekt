import { AddMeme } from "./AddMeme";

import "./Display.scss"

export function Display(props) {
    const t = props.test

    console.log(`godmode is ${props.GODMODE}`)

    return (
        <div class="memes">
            {props.memesArray.map(meme => {
                const switchAble = () => {
                    meme.upAble = !meme.upAble
                    meme.downAble = !meme.downAble
                }
                return (
                    <div class="meme">
                        <div key={meme.id}>
                            <h2>{meme.title}</h2>
                            <img src={meme.img} loading="lazy" alt={meme.title} />
                            <div class="buttons">
                                <button onClick={() => {
                                    meme.upvotes += 1
                                    props.onVote()
                                    switchAble()
                                }} disabled={!meme.upAble}>
                                    🢁 {meme.upvotes}</button>
                                <button onClick={() => {
                                    meme.downvotes += 1
                                    props.onVote()
                                    switchAble()
                                }} disabled={!meme.downAble}>
                                    🢃 {meme.downvotes}</button>
                            </div>
                        </div>
                        <hr />
                    </div>
                );
            }).reverse()}
            <AddMeme memesArray={props.memesArray} test={t} />
        </div >
    )
}
