'use client'

import {useEffect} from "react";
import {useRouter} from "next/navigation";

const NotFound = () => {
    const router = useRouter();

    useEffect(() => {
        const timer = setTimeout(() => {
            router.push("/");
        }, 2000)
    }, [router])

    return (
        <>
            <section className={'h-screen bg-black px-0'}>
                <div className="container">
                    <div className="notfound__wrap " >
                        <h1 className={'font-mono  text-4xl notfound__heading'}>4O4</h1>
                        <p className={'text-wrap text-white text-2xl'}>the page you're looking for does not exist</p>
                    </div>
                </div>
            </section>

            <style>{`
                .container{
                    max-width:1200px;
                    margin:0 auto;
                    padding: 0 15px;
                    width: 100%;
                    height: 100%;
                }
                
                .notfound__wrap{
                    height:100%;
                    display:flex;
                    flex-direction:column;
                    align-items: center;
                    justify-content: center;
                    gap:40px;
                }
                
              
            `}</style>
        </>
    )
}


export default NotFound