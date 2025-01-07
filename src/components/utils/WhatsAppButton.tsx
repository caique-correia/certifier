export default function WhatsAppButton() {
    const openWhatsApp = () => window.open("https://wa.me/5531998084983/?text=Guten%20Morgen%21", "_blank")
    return (
        <button className="buybutton" onClick={openWhatsApp}>COMPRE AGORA</button>
    )
}