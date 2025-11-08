import { useState, useEffect } from "react";
import { Card } from "./card";
import card_results from "../json/cards.json"

export function Board({ user, gameEnd }) {
    const shuffleCards = [...card_results?.listCards].sort(() => Math.random() - 0.5)
    const [cards, setCards] = useState(shuffleCards ?? [])
    const [movements, setMovements] = useState(0)
    const [flipCards, setFlipCards] = useState([])


    const flipCard = ((card) => {
        if (flipCards.length > 1) return
        const newCards = cards.map((c) => {
            return card.id === c.id ? { ...c, flip: true } : c
        })
        setCards(newCards)
        const newFlipCards = [...flipCards, { ...card, flip: true }]
        setFlipCards(newFlipCards)
        if (newFlipCards.length === 2) {
            setMovements(prev => prev + 1)
            newFlipCards[0].coupleNumber !== newFlipCards[1].coupleNumber
                ? setTimeout(() => {
                    setCards(newCards.map((c) => {
                        return newFlipCards.some((e) => c.id === e.id) ? { ...c, flip: false } : c
                    }))
                    setFlipCards([])
                }, 1000)
                : setFlipCards([])
        }
    })

    useEffect(() => {
        const flipCards = cards.filter((c) => c.flip === true)
        if (flipCards.length === cards.length) gameEnd(movements)
    }, [cards])


    return (
        <section className="mt-14" id="section_board">
            <div className="mx-auto max-w-[1000px]" id="container">
                <div id="panel_config" className="flex flex-row p-8 justify-between bg-blue-600/10 rounded-2xl">
                    <div className="flex flex-row gap-14 text-[20px] text-white" id="info">
                        <h3>Nombre: <span className="italic font-bold">{user?.name}</span></h3>
                        <h3>Movimientos:<span className="italic font-bold"> {movements}</span></h3>
                    </div>
                    <div id="options" className="h-max">
                        <a className="h-full">
                            <svg fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="size-8 text-white">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                            </svg>
                        </a>



                    </div>

                </div>
                <div id="board" className="mt-8 grid grid-cols-4 gap-10 ">
                    {cards?.map((card) => <Card key={card?.id} card={card} flipCard={flipCard} />)}
                </div>
            </div>
        </section>
    )
}