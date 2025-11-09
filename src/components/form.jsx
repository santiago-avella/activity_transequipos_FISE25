import { useEffect, useState } from "react";
import { Ask } from "./ask";
import asks_results from '../json/asks.json'
import { useNavigate } from "react-router-dom";

export function FormData() {
    let navigate = useNavigate()
    const [radios, setRadios] = useState([])
    const [asks, setAsks] = useState(asks_results.listAsks)
    const [error, setError] = useState()
    const [formValid, setFormValid] = useState(true)

    const handlerSubmit = (async (event) => {
        event.preventDefault();
        const form = event.currentTarget;
        const personalData = {
            name: form.name?.value || '',
            email: form.email?.value || '',
            phone: form.phone?.value || ''
        };
        const answers = {};
        const radioButtons = form.querySelectorAll('input[type="radio"]:checked');
        radioButtons.forEach(radio => {
            answers[radio.name] = radio.value;
        });
        const finalData = {
            ...personalData,
            answers
        };

        const saveData = await window.ApiElectron.saveDataSurvery(finalData)
        saveData.success ? navigate('/game', {state: saveData.content}) : setError(saveData.message)
    })

    const activerRadio = (event) => {
        const nameRadio = event.target.name;
        setRadios(prev => {
            const filtered = prev.filter(radio => radio !== nameRadio);
            return [...filtered, nameRadio];
        });
    }

    useEffect(() => {
        if (radios.length === asks.length) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [radios])

    return (
        <section id="form_data_client" className="mt-24 my-2">
            <div className="mx-auto max-w-[1000px]">
                <form className="mb-4" onSubmit={handlerSubmit}>
                    <div id="data_personal" className="relative px-10 py-14 bg-blueTransEquipos rounded-2xl shadow-2xl shadow-white/40">
                        <h2 className="absolute top-[-7%] left-[3%] text-3xl font-bold italic text-white">Datos Personales</h2>
                        <div id="flexbox" className="flex flex-row justify-between">
                            <div id="child1">
                                <label className="block text-[18px] text-white italic" htmlFor="name">Nombre</label>
                                <div className="relative mt-1.5">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path fillRule="evenodd" d="M12 4a4 4 0 1 0 0 8 4 4 0 0 0 0-8Zm-2 9a4 4 0 0 0-4 4v1a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-1a4 4 0 0 0-4-4h-4Z" clipRule="evenodd" />
                                        </svg>
                                    </div>
                                    <input type="text" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-11 p-4" placeholder="Ingrese su nombre" required />
                                </div>
                            </div>
                            <div id="child2">
                                <label className="block text-[18px] text-white italic" htmlFor="email">Email</label>
                                <div className="relative mt-1.5">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                                            <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                                            <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                                        </svg>
                                    </div>
                                    <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-4" placeholder="Ingrese su correo" required />
                                </div>
                            </div>
                            <div id="child3">
                                <label className="block text-[18px] text-white italic" htmlFor="phone">Telefono</label>
                                <div className="relative mt-1.5">
                                    <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                                        <svg className="w-6 h-6 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12.017 6.995c-2.306 0-4.534.408-6.215 1.507-1.737 1.135-2.788 2.944-2.797 5.451a4.8 4.8 0 0 0 .01.62c.015.193.047.512.138.763a2.557 2.557 0 0 0 2.579 1.677H7.31a2.685 2.685 0 0 0 2.685-2.684v-.645a.684.684 0 0 1 .684-.684h2.647a.686.686 0 0 1 .686.687v.645c0 .712.284 1.395.787 1.898.478.478 1.101.787 1.847.787h1.647a2.555 2.555 0 0 0 2.575-1.674c.09-.25.123-.57.137-.763.015-.2.022-.433.01-.617-.002-2.508-1.049-4.32-2.785-5.458-1.68-1.1-3.907-1.51-6.213-1.51Z" />
                                        </svg>
                                    </div>
                                    <input type="text" id="phone" minLength={10} maxLength={10} className="bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-11 p-4" placeholder="Ingrese su telefono" required />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id="data_survey" className="mt-24 relative px-10 py-14 bg-blue-950/5 rounded-2xl shadow-2xl shadow-white/40">
                        <h2 className="absolute top-[-1%] left-[3%] text-3xl font-bold italic text-white">Preguntas de Interés</h2>
                        <Ask asks={asks} activerRadio={activerRadio} />
                    </div>
                    <input type="submit" disabled={formValid} value="Enviar" className="w-full active:bg-white active:text-black text-white peer-checked:bg-amber-400 mt-10 bg-orangeTransEquipos disabled:bg-orangeTransEquipos/75 p-2  rounded-lg"></input>
                </form>
                {error !== '' || <div className="inline p-2 bg-red-700 text-white rounded-lg text-[15px]"></div>}
            </div>
        </section>
    )
}