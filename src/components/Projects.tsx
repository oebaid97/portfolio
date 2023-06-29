import Link from 'next/link'

export default function Projects() {
    return (
        <div className="bg-base-100 my-20 lg:px-20 w-full flex flex-col justify-between space-y-20">
            <div className="flex flex-col space-y-3 mb-10 lg:p-0 p-5">
                <h1 className="text-5xl font-bold leading-normal text-base-content max-w-2xl">Things I&apos;ve made trying to put my dent in the universe.</h1>
                <p className="text-lg text-base-content max-w-4xl">I&apos;ve worked on tons of little projects over the years but these are the ones that I&apos;m most proud of. Some of them are open-source, so if you see something that piques your interest, check out the code and contribute if you have ideas for how it can be improved.</p>
            </div>
            <div className="flex space-x-5 mb-5 lg:p-0 p-5">
                <div className="card w-full shadow-2xl shadow-secondary ">
                    <div className="mockup-window border border-base-300">
                        <div className="flex justify-center border-t border-base-300">
                            <iframe src='https://www.swimmerly.net/' width='100%' height='900'></iframe>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title link-accent">
                            <Link href="https://www.swimmerly.net/" target="_blank">Swimmerly</Link>
                        </h2>
                        <p>SPA (Single Page Application) for a local business</p>
                        <div className="card-actions mt-4">
                            <Link className="btn btn-primary" href="https://www.swimmerly.net/" target="_blank">Visit the Site</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-5 mb-5 lg:p-0 p-5">
                <div className="card w-full shadow-2xl shadow-secondary ">
                    <div className="mockup-window border border-base-300">
                        <div className="flex justify-center border-t border-base-300">
                            <iframe src='https://whitedeerenergy.com/' width='100%' height='900'></iframe>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title link-accent">
                            <Link href="https://whitedeerenergy.com/" target="_blank">WhiteDeer Energy</Link>
                        </h2>
                        <p>Performance-Optimized Decoupled NextJS Website</p>
                        <div className="card-actions mt-4">
                            <Link className="btn btn-primary" href="hhttps://whitedeerenergy.com/" target="_blank">Visit the Site</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex space-x-5 mb-5 lg:p-0 p-5">
                <div className="card w-full shadow-2xl shadow-secondary ">
                    <div className="mockup-window border border-base-300">
                        <div className="flex justify-center border-t border-base-300">
                            <iframe src='https://hikethegoodhike.com/' width='100%' height='900'></iframe>
                        </div>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title link-accent">
                            <Link href="https://hikethegoodhike.com/" target="_blank">Hike the Good Hike</Link>
                        </h2>
                        <p>Award-Winning Decoupled eCommerce Website</p>
                        <div className="card-actions mt-4">
                            <Link className="btn btn-primary" href="https://hikethegoodhike.com/" target="_blank">Visit the Site</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}