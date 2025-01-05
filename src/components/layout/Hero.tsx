import { cover } from "../../../public/assets/cover";
import "../../styles/formats.css"

export default function Hero() {
    return(
        <section
            className="pt-16 h-[850px] w-full bg-cover flex flex-col txtblack text-center font-bold"
            style={{ backgroundImage: `url(${cover})` }}
        >
            <div className="flex justify-center">
                <h1 className="p-3 mb-5 text-5xl font-bold bgorange rounded-tl-2xl rounded-br-2xl">MODELOS</h1>
            </div>

            <div className="flex justify-evenly text-2xl">
                <div className="w-1/4">
                    <h2 className="cardtitle">PESSOA FÍSICA</h2>

                    <div className="rounded-3xl">
                        <div className=" rounded-t-3xl">
                            <div className="cardtop">PF A1</div>
                            <div className="cardbot">R$99,00</div>
                        </div>

                        <div className="pt-10 rounded-b-3xl">
                            <div className="cardtop">PJ A1</div>
                            <div className="cardbot">R$160,00</div>
                        </div>
                    </div>
                </div>

                <div className="w-1/4">
                    <h2 className="cardtitle">PESSOA JURÍDICA</h2>

                    <div className="rounded-3xl">
                        <div className="cardtop">e-CPF</div> 
                        <div className="cardbot">R$180,00</div>
                    </div>

                    <div className="pt-10 rounded-3x1">
                        <div className="cardtop">e-CNPJ</div>
                        <div className="cardbot">R$269,00</div>
                    </div>
                </div>
            </div>
        </section>
    );
}