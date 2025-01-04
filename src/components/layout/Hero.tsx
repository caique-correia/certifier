import { cover } from "../../../public/assets/cover";
import { pallete } from "../../../public/assets/pallete";

const { white, yellow, orange, blue, black } = pallete

export default function Hero() {
    return(
        <section
            className={`pt-16 h-[850px] w-full bg-cover flex flex-col text-${black} text-center font-bold`}
            style={{ backgroundImage: `url(${cover})` }}
        >
            <div className="flex justify-center">
                <h1 className={`p-3 mb-5 text-5xl font-bold bg-${orange} rounded-tl-2xl rounded-br-2xl`}>MODELOS</h1>
            </div>

            <div className="flex justify-evenly text-2xl">
                <div className="w-1/4">
                    <h2 className={`p-3 mb-5 h-16 text-3xl bg-${orange} rounded-tl-2xl rounded-br-2xl`}>PESSOA FÍSICA</h2>

                    <div className="rounded-3xl">
                        <div className=" rounded-t-3xl">
                            <div className={`p-10 rounded-t-3xl bg-${yellow}`}>PF A1</div>
                            <div className={`p-12 rounded-b-3xl bg-${white} text-${blue}`}>R$99,00</div>
                        </div>

                        <div className="pt-10 rounded-b-3xl">
                            <div className={`p-10 rounded-t-3xl bg-${yellow}`}>PJ A1</div>
                            <div className={`p-12 rounded-b-3xl bg-${white} text-${blue}`}>R$160,00</div>
                        </div>
                    </div>
                </div>

                <div className="w-1/4">
                    <h2 className={`p-3 mb-5 text-3xl bg-${orange} rounded-tl-2xl rounded-br-2xl`}>PESSOA JURÍDICA</h2>

                    <div className="rounded-3xl">
                        <div className={`p-10 rounded-t-3xl bg-${yellow}`}>e-CPF</div> 
                        <div className={`p-12 rounded-b-3xl bg-${white} text-${blue}`}>R$180,00</div>
                    </div>

                    <div className="pt-10 rounded-3x1">
                        <div className={`p-10 rounded-t-3xl bg-${yellow}`}>e-CNPJ</div>
                        <div className={`p-12 rounded-b-3xl bg-${white} text-${blue}`}>R$269,00</div>
                    </div>
                </div>
            </div>
        </section>
    );
}