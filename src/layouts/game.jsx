
import { Navbar } from "../components/navbar";
import { useLocation } from "react-router-dom";
import { Board } from "../components/board";
import Confetti from 'react-confetti'
import { sizeScreen } from "../const/size-screen";
import { use, useState } from "react";
import { ClasificationTab } from "../components/clasification_tab";

export function Game() {
    const { state } = useLocation()
    const user = state ?? {}
    const [endGame, setEndGame] = useState(false)
    const [showStats, setShowStats] = useState(false)

    const gameEnd = (async (movements) => {
        setEndGame(!endGame)
        await window.ApiElectron.saveDataGame({ id: user?.UUID, name: user?.name, movements: movements })
        setShowStats(true)
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
            {showStats ? <ClasificationTab userId={user?.UUID}/> : ''}
        </>
    )
}