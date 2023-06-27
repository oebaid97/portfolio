import Link from 'next/link'
import Image from 'next/image'

export default function About() {
    return (
        <div className="bg-base-100 my-20 px-20 w-full flex space-x-10 justify-between">
            <div className="flex flex-col space-y-3 max-w-lg">
                <h1 className="text-5xl font-bold leading-normal text-base-content">I&apos;m Omar Ebaid. I live in Houston, where I work with technology.</h1>
                <p className="text-lg text-base-content">Welcome to my website! I&apos;m an experienced Frontend Web Developer with a passion for efficiency and a penchant for not reinventing the wheel. My approach to web development can be summed up in one word: minimalism. I believe in finding elegant, streamlined solutions to complex problems, avoiding unnecessary clutter and complexity whenever possible. With a keen eye for detail and a deep understanding of user experience, I strive to create intuitive and visually appealing websites that leave a lasting impression.</p>
                <p className="text-lg text-base-content">One of my core values is efficiency. I am constantly seeking ways to optimize my workflow and automate repetitive tasks. By harnessing the power of automation, I can focus my time and energy on the creative aspects of web development, allowing me to deliver high-quality results in a shorter timeframe. I firmly believe that by leveraging the right tools and technologies, we can achieve more in less time, without compromising on quality.</p>
                <p className="text-lg text-base-content">I pride myself on being outspoken, opinionated, and honest. I&apos;m not afraid to share my ideas and challenge the status quo. I believe in fostering open and transparent communication, both with clients and colleagues, to ensure that everyone involved in a project is on the same page. I value constructive feedback and thrive in collaborative environments where ideas are exchanged freely, ultimately leading to the best possible outcome.</p>
                <p className="text-lg text-base-content"> When you work with me, you can expect a dedicated professional who is committed to delivering exceptional results. I have a proven track record of successfully bringing designs to life and crafting seamless user experiences. Whether you&apos;re a small business owner, a startup founder, or a larger organization, I&apos;m excited to collaborate with you on your next web development project. Let&apos;s create something remarkable together, powered by efficiency, simplicity, and automation.</p>
            </div>
            <div className="flex flex-col">
                <Image src="/portfolio-action-shot5.jpg" alt="Selfie in the Grand Canyon" width={400} height={750} className=' rounded-lg object-cover object-bottom mb-5' />
                <div className="mockup-code space-y-5 shadow-2xl shadow-secondary">
                    <pre data-prefix=">"><code>Preferred Tech Stack:</code></pre>
                    <pre data-prefix="$"><code>Frontend: <Link href='https://nextjs.org/' target='_blank' className='btn btn-primary btn-sm'>NextJS</Link></code></pre>
                    <pre data-prefix="$"><code>Frontend Hosting: <Link href='https://vercel.com/' target='_blank' className='btn btn-primary btn-sm'>Vercel</Link></code></pre>
                    <pre data-prefix="$"><code>Styling: <Link href='https://tailwindcss.com/' target='_blank' className='btn btn-primary btn-sm'>Tailwind CSS</Link></code></pre>
                    <pre data-prefix="$"><code>Components: <Link href='https://daisyui.com/' target='_blank' className='btn btn-primary btn-sm'>DaisyUI</Link></code></pre>
                    <pre data-prefix="$"><code>Icons: <Link href='https://heroicons.com/' target='_blank' className='btn btn-primary btn-sm'>HeroIcons</Link></code></pre>
                    <pre data-prefix="$"><code>Mockups: <Link href='https://www.figma.com/' target='_blank' className='btn btn-primary btn-sm'>Figma</Link></code></pre>
                    <pre data-prefix="$"><code>Backend: <Link href='https://decapcms.org/' target='_blank' className='btn btn-primary btn-sm'>Decap CMS</Link></code></pre>
                </div>
            </div>


        </div>
    )
}