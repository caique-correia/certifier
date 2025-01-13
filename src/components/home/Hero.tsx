"use client"

import { cover } from "../../../public/cover";
import { redirectWhatsApp } from "../utils/redirectWhatsApp";
import { messages } from "../utils/messages";
import styles from "../../styles/home.module.css"

export default function Hero() {
    return(
        <section
            className="pt-16 h-[1000px] w-full bg-cover flex flex-col txtblack text-center font-bold"
            style={{ backgroundImage: `url(${cover})` }}
        >
            <div className={`flex justify-center`}>
                <h1 className={styles.h1}>MODELOS</h1>
            </div>

            <div className="flex justify-evenly">
                <div className="w-1/3">
                    <h2 className={styles.cardtitle}>PESSOA FÍSICA</h2>

                    <div className="flex flex-col items-center">
                        <div className={styles.cardtop}>PF A1</div>
                        <div className={styles.cardbot}>
                            <div className={styles.promote}>POR APENAS</div>
                            <div>R$99,00</div>
                            <button className={styles.buybutton} onClick={() => redirectWhatsApp(messages.pfa1)}>COMPRE AGORA</button>
                        </div>
                    </div>

                    <div className="pt-10 flex flex-col items-center">
                        <div className={styles.cardtop}>PJ A1</div>
                        <div className={styles.cardbot}>
                            <div className={styles.promote}>POR APENAS</div>
                            <div>R$160,00</div>
                            <button className={styles.buybutton} onClick={() => redirectWhatsApp(messages.pja1)}>COMPRE AGORA</button>
                        </div>
                    </div>
                </div>

                <div className="w-1/3">
                    <h2 className={styles.cardtitle}>PESSOA JURÍDICA</h2>

                    <div className="flex flex-col items-center">
                        <div className={styles.cardtop}>e-CPF</div>
                        <div className={styles.cardbot}>
                            <div className={styles.promote}>POR APENAS</div>
                            <div>R$180,00</div>
                            <button className={styles.buybutton} onClick={() => redirectWhatsApp(messages.ecpf)}>COMPRE AGORA</button>
                        </div>
                    </div>

                    <div className="pt-10 flex flex-col items-center">
                        <div className={styles.cardtop}>e-CNPJ</div>
                        <div className={styles.cardbot}>
                            <div className={styles.promote}>POR APENAS</div>
                            <div>R$269,00</div>
                            <button className={styles.buybutton} onClick={() => redirectWhatsApp(messages.ecnpj)}>COMPRE AGORA</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}