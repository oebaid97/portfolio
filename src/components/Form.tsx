'use client'

import { useState, useEffect } from "react";

export default function Form() {
    const [mounted, setMounted] = useState(false);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState("");
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);

    useEffect(() => {
        setMounted(true)
    }, [])

    const handleSubmit = async (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setSending(true);

        const res = await fetch("/api/email", {
            body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message,
            }),
            headers: {
                "Content-Type": "application/json",
            },
            method: "POST",
        });

        const { error, status } = await res.json();

        if (status === "success") {
            setSending(false);
            setSent(true);
        }

        if (error) {
            console.log(error);
            return;
        }
    };

    return (
        <>
            {mounted && (
                <form className="lg:w-2/3 w-full mb-12 p-5" id="get-started" onSubmit={handleSubmit}>
                    {!sent && (
                        <div className="form-control space-y-5">
                            <h2 className="text-3xl font-bold text-accent">Contact Me</h2>
                            <input type="text" name="name" placeholder="Name" className="input w-full border-accent" onChange={(e) => { setName(e.target.value); }} />
                            <input type="text" name="email" placeholder="Email" className="input w-full border-accent" onChange={(e) => { setEmail(e.target.value); }} />
                            <input type="text" name="phone" placeholder="Phone Number" className="input w-full border-accent" onChange={(e) => { setPhone(e.target.value); }} />
                            <textarea name="message" className="textarea h-24 w-full border-accent" placeholder="Additional Questions or Comments" onChange={(e) => { setMessage(e.target.value); }}></textarea>
                            <button className="btn btn-accent max-w-sm text-base-100">{sending ? 'Sending...' : 'Submit'}</button>
                        </div>
                    )}
                    {sent && <h2 className="text-xl text-center text-white">Thank you for getting in touch! I will get back to you as soon as possible.</h2>}
                </form>
            )}
        </>
    )
}

