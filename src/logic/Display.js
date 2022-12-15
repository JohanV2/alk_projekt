import { AddMeme } from "./AddMeme";

import "./Display.scss"

export function Display(props) {

    return (
        <div class="memes">
            {props.memesArray.map(meme => {

                const checkUserVotes = (vote, antagonist) => {
                    const indexVote = vote.indexOf(props.userName)
                    const indexAntagonist = antagonist.indexOf(props.userName)
                    if (indexVote > -1 && !indexAntagonist > -1) {
                        vote.splice(indexVote, 1)
                    }
                    else if (indexAntagonist > -1) {
                        vote.push(props.userName)
                        antagonist.splice(indexAntagonist, 1)
                    }
                    else {
                        vote.push(props.userName)
                    }
                    props.onVote()
                }

                return (
                    <div class="meme">
                        <div key={meme.id}>
                            <h2>{meme.title}</h2>
                            <img src={meme.img} loading="lazy" alt={meme.title} />
                            <div class="buttons">
                                <button onClick={() => {
                                    checkUserVotes(meme.upvotes, meme.downvotes)
                                    if (props.GODMODE === false) {
                                        // onUpVote()
                                    }
                                }} disabled={!meme.upAble}>
                                    🢁 {meme.upvotes.length}</button>
                                <button onClick={() => {
                                    checkUserVotes(meme.downvotes, meme.upvotes)
                                    if (props.GODMODE === false) {
                                        // onDownVote()
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
