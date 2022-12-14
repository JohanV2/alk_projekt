import { AddMeme } from "./AddMeme";
import { useState } from "react";

import "./Display.scss"

export function Display(props) {
    const t = props.test

    console.log(`godmode in display component is ${props.GODMODE}`)




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
                                    console.log(`godmode on upvoting start is ${props.GODMODE}`)
                                    props.onVote()
                                    if (props.GODMODE === false) {
                                        switchAble()
                                    }
                                    console.log(`godmode after upvoting is ${props.GODMODE}`)
                                }} disabled={!meme.upAble}>
                                    🢁 {meme.upvotes}</button>
                                <button onClick={() => {
                                    meme.downvotes += 1
                                    props.onVote()
                                    if (props.GODMODE === false) {
                                        switchAble()
                                    }
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
