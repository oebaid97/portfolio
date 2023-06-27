import Image from 'next/image'

export default function Images() {
    return (
        <div className='w-full h-80 mb-40'>
            <div className="carousel space-x-20 space-y-10 items-baseline absolute left-0 w-screen">
                <div className="carousel-item">
                    <Image
                        className="relative rotate-2 rounded-lg object-cover h-80 object-center"
                        src="/portfolio-action-shot1.jpg"
                        alt="Action Shot of Omar Ebaid"
                        priority
                        width={300}
                        height={300}

                    />
                </div>
                <div className="carousel-item overflow-visible">
                    <Image
                        className="relative -rotate-2 rounded-lg object-cover h-80 object-center"
                        src="/portfolio-action-shot2.jpg"
                        alt="Action Shot of Omar Ebaid"
                        priority
                        width={300}
                        height={300}
                    />
                </div>
                <div className="carousel-item overflow-visible">
                    <Image
                        className="relative rotate-2 rounded-lg object-cover h-80 object-center"
                        src="/portfolio-action-shot3.jpg"
                        alt="Action Shot of Omar Ebaid"
                        priority
                        width={300}
                        height={300}
                    />
                </div>
                <div className="carousel-item overflow-visible">
                    <Image
                        className="relative -rotate-2 rounded-lg object-cover h-80 object-center"
                        src="/portfolio-action-shot4.jpg"
                        alt="Action Shot of Omar Ebaid"
                        priority
                        width={300}
                        height={300}
                    />
                </div>
                <div className="carousel-item overflow-visible">
                    <Image
                        className="relative rotate-2 rounded-lg object-cover h-80 object-center"
                        src="/portfolio-action-shot5.jpg"
                        alt="Action Shot of Omar Ebaid"
                        priority
                        width={300}
                        height={300}
                    />
                </div>
            </div>
        </div>
    )
}