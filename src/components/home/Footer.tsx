import "../../styles/formats.css"

export default function Footer() {
    return(
        <footer className="w-full flex flex-col bg-white h-48">
            <div className="h-2/3 bg-[#082434] flex justify-end">
                <div className="flex flex-col mt-9 mr-12 w-1/4 text-end">
                    <h2 className="font-bold">
                        VERINHA CERTIFICADOS
                    </h2>
                    <h2 className="mt-1 text-sm font-bold">
                        77.777.777/0007-77
                    </h2>
                </div>
            </div>
            <div className="h-2/5 bg-[#081c24] flex">
                <div className="mt-6 ml-12">
                    <h3>©Copyright by Loktys</h3>
                </div>
            </div>
        </footer>
    );
}