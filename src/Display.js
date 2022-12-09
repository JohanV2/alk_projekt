import { AddMeme } from "./AddMeme";
import SimpleBarReact from "simplebar-react";

import "simplebar/src/simplebar.css";


export function Display(props) {
    const t = props.test
    console.log(t)
    return (
        <SimpleBarReact style={{ maxHeight: 900 }}>
            {props.memesArray.map(meme => {
                return (
                    <div>
                        <div key={meme.id}>
                            <h2>title: {meme.title}</h2>
                            <img src={meme.img} loading="lazy" />
                            <h2>upvotes: {meme.upvotes}</h2>
                            <h2>downvotes: {meme.downvotes}</h2>
                            <hr />
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
                    </div>
                );
            })}
            <AddMeme memesArray={props.memesArray} test={t} />
        </SimpleBarReact>
    )
}
