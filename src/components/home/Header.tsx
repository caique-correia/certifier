"use client"

import Link from "next/link";
import { redirectWhatsApp } from "../utils/redirectWhatsApp";
import { messages } from "../utils/messages";
import styles from "../../styles/home.module.css"

export default function Header() {
    return (
        <header className={styles.header}>
            <div>CERTIFICADORA</div>

            <button onClick={() => redirectWhatsApp(messages.help)}>FALE CONOSCO</button>

            <Link href="/login">LOG IN</Link>
        </header>
    );
}
