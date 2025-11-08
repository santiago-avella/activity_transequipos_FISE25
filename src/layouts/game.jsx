
import { Navbar } from "../components/navbar";
import { useLocation } from "react-router-dom";
import { Board } from "../components/board";
import Confetti from 'react-confetti'
import { sizeScreen } from "../const/size-screen";
import { useState } from "react";

export function Game() {
    const { state } = useLocation()
    const user = state ?? {}
    const [endGame, setEndGame] = useState(false)

    const gameEnd = ((movements) => {
        setEndGame(!endGame)
    })

    return (
        <>
            <Navbar />
            <section id="section-intro" className="mt-20">
                <div className="mx-auto max-w-[1000px] " id="container">
                    <h1 className="inline text-5xl font-black text-white drop-shadow-[0_10px_10px_rgba(163,230,53,1)] filter">
                        Participa y Gana
                    </h1>
                </div>
            </section>
            <Board user={user} gameEnd={gameEnd} />
            {endGame 
                ? 
                <Confetti
                    width={sizeScreen.width}
                    height={sizeScreen.height}
                />
            : ''}
        </>
    )
}