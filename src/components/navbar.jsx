import logo from '../../public/assets/img/logotipo-transequipos-sa.png'

export function Navbar(){
    return(
        <section id="Navbar" className="">
            <div id="container" className="mx-auto max-w-[1000px]">
                <div id="flexbox" className="flex flex-col gap-2">
                    <img className="max-w-[80%]" src={logo} alt="logo"></img>
                    <h1 className="text-white text-2xl italic font-bold text-right drop-shadow-[0_0_25px_rgba(250,204,21,1)] filter">Mantenemos la <span className="text-amber-600">mejor energía</span> para sus <span className="text-green-700">negocios</span></h1>
                </div> 
            </div>
        </section>
    )
}