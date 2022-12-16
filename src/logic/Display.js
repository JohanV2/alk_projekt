import { AddMeme } from "./AddMeme";
import "./Display.scss"

export function Display(props) {
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
                            document.getElementById(meme.id + buttonType).classList.remove("active-vote")
                        }
                        else if (indexAntagonist > -1) {
                            vote.push(props.userName)
                            document.getElementById(meme.id + buttonType).classList.add("active-vote")

                            antagonist.splice(indexAntagonist, 1)
                            document.getElementById(meme.id + antagonistButtonType).classList.remove("active-vote")
                        }
                        else {
                            vote.push(props.userName)
                            document.getElementById(meme.id + buttonType).classList.add("active-vote")
                        }
                        props.onVote()
                    }
                    const godModeVotes = (vote) => {
                        vote.push("GOD")
                        props.onVote()
                    }
                    const rememberButtonVoteColors = (vote) => {
                        if (vote.indexOf(props.userName) > -1) {
                            return ("active-vote")
                        } else return null
                    }

                    return (
                        <div key={meme.id} className="meme">
                            <div className="meme-top">
                                <h2>{meme.title}</h2>
                                <img src={meme.img} loading="lazy" alt={meme.title} />
                            </div>
                            <div className="buttons">
                                <button id={meme.id + "u"} onClick={() => {
                                    voteClick(meme.upvotes, meme.downvotes, "u")
                                }} className={rememberButtonVoteColors(meme.upvotes)}>
                                    🢁 {meme.upvotes.length}</button>
                                <button id={meme.id + "d"} onClick={() => {
                                    voteClick(meme.downvotes, meme.upvotes, "d")
                                }} className={rememberButtonVoteColors(meme.downvotes)}>
                                    🢃 {meme.downvotes.length}</button>
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
