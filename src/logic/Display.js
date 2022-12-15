import { AddMeme } from "./AddMeme";
import "./Display.scss"

export function Display(props) {
    const buttonColorActive = "rgb(59, 92, 255)";
    const buttonColorInactive = "rgb(168, 168, 168)";
    return (
        <div className="memes" >
            {
                props.memesArray.map(meme => {
                    const voteClick = (vote, antagonist, buttonType) => {
                        if (props.GODMODE === false) {
                            checkUserVotes(vote, antagonist, buttonType)
                        } else {
                            godModeVotes(vote)
                        }
                    }
                    const checkUserVotes = (vote, antagonist, buttonType) => {
                        let antagonistButtonType = ""
                        if (buttonType === "u") {
                            antagonistButtonType = "d"
                        } else if (buttonType === "d") {
                            antagonistButtonType = "u"
                        } else {
                            console.log("wrong button type")
                        }
                        const indexVote = vote.indexOf(props.userName)
                        const indexAntagonist = antagonist.indexOf(props.userName)
                        if (indexVote > -1 && !indexAntagonist > -1) {
                            vote.splice(indexVote, 1)
                            document.getElementById(meme.id + buttonType).style.backgroundColor = buttonColorInactive
                        }
                        else if (indexAntagonist > -1) {
                            vote.push(props.userName)
                            document.getElementById(meme.id + buttonType).style.backgroundColor = buttonColorActive

                            antagonist.splice(indexAntagonist, 1)
                            document.getElementById(meme.id + antagonistButtonType).style.backgroundColor = buttonColorInactive
                        }
                        else {
                            vote.push(props.userName)
                            document.getElementById(meme.id + buttonType).style.backgroundColor = buttonColorActive
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
                                    <button id={meme.id + "u"} onClick={() => {
                                        voteClick(meme.upvotes, meme.downvotes, "u")
                                    }}>
                                        🢁 {meme.upvotes.length}</button>
                                    <button id={meme.id + "d"} onClick={() => {
                                        voteClick(meme.downvotes, meme.upvotes, "d")
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
