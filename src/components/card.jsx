import { useEffect, useRef, useState } from "react"
import { IconMap } from "../const/icon-map"



export function Card({ card, flipCard }) {
    const [flip, setFlip] = useState(card?.flip)
    const routeImg = IconMap[card?.icon]
    const changePositionCard = (() => flipCard(card))

    useEffect(() => {
        setFlip(card.flip)
    }, [card])

    return (
        <>
            <div onClick={changePositionCard} className={`card ${flip ? 'flip' : ''}`}>
                <div className="front"></div>
                <div className="back">
                   {flip ? <img className="h-[90%]" src={routeImg}></img>: ''}
                </div>
            </div>
        </>
    )
}