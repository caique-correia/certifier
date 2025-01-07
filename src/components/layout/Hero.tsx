"use client"

import { cover } from "../../../public/cover";
import "../../styles/formats.css"
import WhatsAppButton from "../utils/WhatsAppButton";

export default function Hero() {
    return(
        <section
            className="pt-16 h-[1000px] w-full bg-cover flex flex-col txtblack text-center font-bold"
            style={{ backgroundImage: `url(${cover})` }}
        >
            <div className="flex justify-center">
                <h1>MODELOS</h1>
            </div>

            <div className="flex justify-evenly">
                <div className="w-1/3">
                    <h2 className="cardtitle">PESSOA FÍSICA</h2>

                    <div className="flex flex-col items-center">
                        <div className="cardtop">PF A1</div>
                        <div className="cardbot">
                            <div className="promote">POR APENAS</div>
                            <div>R$99,00</div>
                            <WhatsAppButton />
                        </div>
                    </div>

                    <div className="pt-10 flex flex-col items-center">
                        <div className="cardtop">PJ A1</div>
                        <div className="cardbot">
                            <div className="promote">POR APENAS</div>
                            <div>R$160,00</div>
                            <WhatsAppButton />
                        </div>
                    </div>
                </div>

                <div className="w-1/3">
                    <h2 className="cardtitle">PESSOA JURÍDICA</h2>

                    <div className="flex flex-col items-center">
                        <div className="cardtop">e-CPF</div>
                        <div className="cardbot">
                            <div className="promote">POR APENAS</div>
                            <div>R$180,00</div>
                            <WhatsAppButton />
                        </div>
                    </div>

                    <div className="pt-10 flex flex-col items-center">
                        <div className="cardtop">e-CNPJ</div>
                        <div className="cardbot">
                            <div className="promote">POR APENAS</div>
                            <div>R$269,00</div>
                            <WhatsAppButton />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}