import { AddMeme } from "./AddMeme";
import "./Display.scss"
import { userName } from "../App"

export function Display(props) {
    console.log(userName)
    return (
        <div className="memes" >
            {
                props.memesArray.map(meme => {

                    // const voteClick = (actionType) => {
                    //     if (props.GODMODE === false) {
                    //         checkUserVotes(vote, antagonist, buttonType)
                    //     } else {
                    //         godModeVotes(vote)
                    //     }
                    // }
                    const voteClick = (actionType) => {
                        // let antagonistButtonType = ""
                        // if (buttonType === "u") {
                        //     antagonistButtonType = "d"
                        // } else if (buttonType === "d") {
                        //     antagonistButtonType = "u"
                        // } else {
                        //     console.log("wrong button type")
                        // }
                        // const indexVote = vote.indexOf(props.userName)
                        // const indexAntagonist = antagonist.indexOf(props.userName)
                        // if (indexVote > -1 && !indexAntagonist > -1) {
                        //     vote.splice(indexVote, 1)
                        //     // document.getElementById(meme.id + buttonType).classList.remove("active-vote")
                        // }
                        // else if (indexAntagonist > -1) {
                        //     vote.push(props.userName)
                        //     // document.getElementById(meme.id + buttonType).classList.add("active-vote")

                        //     antagonist.splice(indexAntagonist, 1)
                        //     // document.getElementById(meme.id + antagonistButtonType).classList.remove("active-vote")
                        // }
                        // else {
                        //     vote.push(props.userName)
                        //     // document.getElementById(meme.id + buttonType).classList.add("active-vote")
                        // }
                        if (props.GODMODE) {
                            if (actionType === "upvote") {
                                meme.upvotes = [...meme.upvotes, "GOD"]
                            }
                            else if (actionType === "downvote") {
                                meme.downvotes = [...meme.downvotes, "GOD"]
                            }
                            props.onVote(meme)
                            return
                        }


                        if (actionType === "upvote") {
                            if (meme.upvotes.includes(userName)) {
                                meme.upvotes = meme.upvotes.filter(user => userName !== user)
                            } else {
                                meme.upvotes = [...meme.upvotes, userName]
                                if (meme.downvotes.includes(userName)) {
                                    meme.downvotes = meme.downvotes.filter(user => userName !== user)
                                }
                            }
                        } else if (actionType === "downvote") {
                            if (meme.downvotes.includes(userName)) {
                                meme.downvotes = meme.downvotes.filter(user => userName !== user)
                            } else {
                                meme.downvotes = [...meme.downvotes, userName]
                                if (meme.upvotes.includes(userName)) {
                                    meme.upvotes = meme.upvotes.filter(user => userName !== user)
                                }
                            }
                        }

                        props.onVote(meme)
                    }
                    // const godModeVotes = (vote) => {
                    //     vote.push("GOD")
                    //     props.onVote()
                    // }
                    // const rememberButtonVoteColors = (vote) => {
                    //     if (vote.indexOf(props.userName) > -1) {
                    //         return ("active-vote")
                    //     } else return null
                    // }

                    const isUpvoteActive = meme.upvotes.includes(userName)

                    return (
                        <div key={meme.id} className="meme">
                            <div className="meme-top">
                                <h2>{meme.title}</h2>
                                <img src={meme.img} loading="lazy" alt={meme.title} />
                            </div>
                            <div className="buttons">
                                <button id={meme.id + "u"} onClick={() => {
                                    voteClick("upvote")
                                }} className={isUpvoteActive ? "active-vote" : ""}>
                                    🢁 {meme.upvotes.length}</button>
                                <button id={meme.id + "d"} onClick={() => {
                                    voteClick("downvote")
                                }} >
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
