"use client"

import { redirectWhatsApp } from "../utils/redirectWhatsApp";
import { messages } from "../utils/messages";
import "../../styles/formats.css"

export default function Header() {
    return (
        <header>
            <div>CERTIFICADORA</div>

            <button onClick={() => redirectWhatsApp(messages.help)}>FALE CONOSCO</button>

            <button>LOG IN</button>
        </header>
    );
}
