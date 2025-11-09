import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

function RowTable({ position, name, movements }) {
    return (
        <>
            <td>{position}º</td>
            <td>{name}</td>
            <td>{movements}</td>
        </>
    )
}



export function ClasificationTab({ userId }) {
    const [ranking, setRanking] = useState([])
    let navigate = useNavigate()

    useEffect(() => {
        const fetchDataRanking = async () => {
            const data = await window.ApiElectron.getRankingGame()
            setRanking(data || [])
        }
        fetchDataRanking()
    }, [])

    const goBackIndex = (() => {
        navigate('/')
    })


    return (
        <>
            <section className="fixed overflow-y-scroll mx-auto top-[9%] bg-black/85 left-[4%] rounded-2xl right-[4%] filter w-[92vw] h-[85vh] z-50" id="section_classification">
                <h1 className="text-[90px] mt-10 text-center text-white font-bold">Clasificación</h1>

                <table className="my-7 mx-auto w-[90%]">
                    <thead>
                        <tr className="grid grid-cols-3 text-white text-[25px] italic">
                            <th>Pocisión</th>
                            <th>Nombre</th>
                            <th>Movimientos</th>
                        </tr>
                    </thead>
                    <tbody className="mt-5 flex flex-col gap-2 ">
                        {ranking?.map((record) => {
                            return (
                                <tr key={record.id} className={`bg-blueTransEquipos/30  text-center p-2 rounded-2x grid text-white font-normal grid-cols-3 ${record.id === userId ? 'bg-orangeTransEquipos' : 'bg-blueTransEquipos'}`}>
                                    <RowTable key={record?.id} position={record?.position} name={record?.name} movements={record?.movements} />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
                <div className="w-full justify-center flex">
                    <a onClick={goBackIndex} className="text-[20px] font-bold px-6 py-0.5 rounded-xl active:bg-white active:text-black text-white bg-red-600">Salir</a>
                </div>
            </section>
        </>
    )
}