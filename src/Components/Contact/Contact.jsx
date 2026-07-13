import React from 'react'
import contactImage from "../../assets/1810238.jpg"

export default function Contact() {

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const email = e.target.email.value;
        const phone = e.target.tel.value;
        const description = e.target.des.value;

        const subject = encodeURIComponent(`Contact from ${name}`);
        const body = encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${description}`
        );

        const mailToLink = `mailto:amansinghofficial973@gmail.com?subject=${subject}&body=${body}`;

        window.location.href = mailToLink;
    };

    return (
        <div className="relative flex items-top justify-center min-h-[700px] bg-white sm:items-center sm:pt-0">

            <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                <div className="mt-8 overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="p-6 mr-2 bg-gray-100 sm:rounded-lg">
                            <h1 className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight">
                                Get in touch:
                            </h1>
                            <p className="text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2">
                                Fill in the form to start a conversation
                            </p>

                            <div className="flex items-center mt-8 text-gray-600">
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    Old Town, Bhubaneswar, Odisha, Postal Code:-751002
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +44 1234567890
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    amansinghofficial973@gmail.com
                                </div>
                            </div>
                        </div>

                        <form className="p-6 flex flex-col justify-center" onSubmit={handleSubmit}>
                            <div className="flex flex-col">
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    required
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <input
                                    type="tel"
                                    name="tel"
                                    placeholder="Telephone Number"
                                    className="w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none"
                                />
                            </div>

                            <div className="flex flex-col mt-2">
                                <textarea
                                    name="des"
                                    placeholder="Description"
                                    required
                                    className="h-32 w-100 mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none"
                                />
                            </div>

                            <button
                                type="submit"
                                className="md:w-32 bg-purple-700 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:bg-purple-600 transition ease-in-out duration-300"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="absolute right-10 top-10 hidden lg:block">
                <img className="w-96" src={contactImage} alt="image1" />
            </div>
        </div>
    );
}
