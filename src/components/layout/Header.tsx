import { pallete } from "../../../public/assets/pallete";

const { blue, white } = pallete

export default function Header() {
    return (
        <header 
            className={`w-full flex justify-between items-center p-8 px-36`}
            style={{backgroundColor: blue, color: white}}>
                <div>CERTIFICADORA</div>
                <div>FALE CONOSCO</div>
        </header>
    );
}
