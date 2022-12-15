import { AddMeme } from "./AddMeme";

import "./Display.scss"

export function Display(props) {

    return (
        <div className="memes" >
            {
                props.memesArray.map(meme => {
                    const voteClick = (vote, antagonist) => {
                        if (props.GODMODE === false) {
                            checkUserVotes(vote, antagonist)
                        } else {
                            godModeVotes(vote)
                        }
                    }
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
                    const godModeVotes = (vote) => {
                        vote.push("GOD")
                        props.onVote()
                    }

                    return (
                        <div key={meme.id} className="meme">
                            <div>
                                <h2>{meme.title}</h2>
                                <img src={meme.img} loading="lazy" alt={meme.title} />
                                <div className="buttons">
                                    <button onClick={() => {
                                        voteClick(meme.upvotes, meme.downvotes)
                                    }}>
                                        🢁 {meme.upvotes.length}</button>
                                    <button onClick={() => {
                                        voteClick(meme.downvotes, meme.upvotes)
                                    }}>
                                        🢃 {meme.downvotes.length}</button>
                                </div>
                            </div>
                            <hr />
                        </div>
                    );
                }).reverse()
            }
            < AddMeme memesArray={props.memesArray} />
        </div >
    )
}
