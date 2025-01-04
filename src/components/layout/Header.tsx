import { pallete } from "../../../public/assets/pallete";

const { blue, white } = pallete

export default function Header() {
    return (
        <header className={`w-full bg-${blue} text-${white} flex justify-evenly items-center p-8`}>
            <div>CERTIFICADORA</div>

            <div>FALE CONOSCO</div>

            <div>LOG IN</div>
        </header>
    );
}
