import Image from 'next/image'
import { ArrowRightIcon } from '@heroicons/react/24/outline'


export default function Images() {
    return (
        <div className='mb-20'>
            <div className="carousel carousel-center max-w-7xl space-x-20 space-y-10 items-baseline w-screen">
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
            <div className='text-center'>
                <h2 className="text-md text-center text-accent mt-5 lg:hidden animate-pulse inline-flex">Scroll to see more!&nbsp;<ArrowRightIcon className='fill-base-100 font-bold h-5 w-5 mt-0.5' /></h2>
            </div>
        </div>
    )
}