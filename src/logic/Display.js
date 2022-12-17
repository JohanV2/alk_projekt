import { AddMeme } from "./AddMeme";
import "./Display.scss"
import { userName } from "../App"

export function Display(props) {
    return (
        <div className="memes" >
            {
                props.memesArray.map(meme => {

                    const voteClick = (actionType) => {

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

                    const isUpvoteActive = meme.upvotes.includes(userName)
                    const isDownvoteActive = meme.downvotes.includes(userName)

                    return (
                        <div key={meme.id} className="meme">
                            <div className="meme-top">
                                <h2>{meme.title}</h2>
                                <img src={meme.img} loading="lazy" alt={meme.title} />
                            </div>
                            <div className="buttons">
                                <button onClick={() => {
                                    voteClick("upvote")
                                }} className={isUpvoteActive ? "active-vote" : ""}>
                                    🢁 {meme.upvotes.length}</button>
                                <button onClick={() => {
                                    voteClick("downvote")
                                }} className={isDownvoteActive ? "active-vote" : ""}>
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
