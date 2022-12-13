import { AddMeme } from "./AddMeme";

import "./Display.scss"

export function Display(props) {
    const t = props.test
    console.log(t)
    return (
        <div class="memes">
            {props.memesArray.map(meme => {
                return (
                    <div>
                        <div key={meme.id}>
                            <h2>title: {meme.title}</h2>
                            <img src={meme.img} loading="lazy" alt={meme.title} />
                            <h2>upvotes: {meme.upvotes}</h2>
                            <h2>downvotes: {meme.downvotes}</h2>
                            <button onClick={() => {
                                meme.upvotes += 1
                                props.onVote()
                            }}>
                                Upvote</button>
                            <button onClick={() => {
                                meme.downvotes += 1
                                props.onVote()
                            }}>
                                Downvote</button>
                        </div>
                        <hr />
                    </div>
                );
            }).reverse()}
            <AddMeme memesArray={props.memesArray} test={t} />
        </div >
    )
}
