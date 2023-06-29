import Image from 'next/image'

export default function Hero() {
    return (
        <div className="hero bg-base-100 justify-start my-10 md:px-20 md:my-20">
            <div className="hero-content flex-col">
                <div className='w-full'>
                    <Image src="/portrait.jpg" alt="portrait of Omar Ebaid" width={150} height={150} className='rounded-full object-cover h-40 object-bottom mb-5' />
                    <h1 className="text-5xl font-bold leading-normal text-base-content max-w-3xl">Software Engineer, Soccer Fan, and Pizza Enthusiast 🍕</h1>
                    <p className="py-6 text-lg text-base-content max-w-4xl">{'I\'m Omar, a software engineer based in Houston, Texas. I work at Unlock Health Company as a Frontend Developer, where I\'m always looking for new ways technology can help maximize efficency.'}</p>
                </div>
            </div>
        </div>
    )
}