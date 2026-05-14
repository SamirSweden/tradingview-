
import { Metadata} from "next";
import Header from "@/app/components/shared/header/Header";


export const metadata: Metadata = {
    title: "Kraken.su | Checklist prices",
    description: "Explore prices then invest",
}


export default  function CheckListLayout({children} : {children: React.ReactNode}) {
    return (
        <>
            <Header />
            <main>
                {children}
            </main>
        </>
    )
}

