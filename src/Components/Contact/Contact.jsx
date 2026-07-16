import React from "react";
import contactImage from "../../assets/1810238.jpg";
import { sendContactMessage } from "../../RequiredApi/ContactApi";

export default function Contact() {

    const handleSubmit = async (e) => {
        e.preventDefault();

        const data = {
            fullname: e.target.name.value,
            email: e.target.email.value,
            telephone: e.target.tel.value,
            description: e.target.des.value,
        };

        try {
            await sendContactMessage(data);

            alert("Message sent successfully!");

            e.target.reset();
        } catch (error) {
            console.error(error);

            alert(
                error.response?.data?.message ||
                "Failed to send message."
            );
        }
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
                                    Old Town, Bhubaneswar,
                                    Odisha, Postal Code:-751002
                                </div>
                            </div>

                            <div className="flex items-center mt-4 text-gray-600">
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    +91 6291777366
                                </div>
                            </div>

                            <div className="flex items-center mt-2 text-gray-600">
                                <div className="ml-4 text-md tracking-wide font-semibold w-40">
                                    amansinghofficial973@gmail.com
                                </div>
                            </div>
                        </div>

                        <form
                            className="p-6 flex flex-col justify-center"
                            onSubmit={handleSubmit}
                        >
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                required
                                className="w-full mt-2 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none"
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                required
                                className="w-full mt-4 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none"
                            />

                            <input
                                type="tel"
                                name="tel"
                                placeholder="Telephone Number"
                                required
                                className="w-full mt-4 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none"
                            />

                            <textarea
                                name="des"
                                placeholder="Description"
                                required
                                className="h-32 w-full mt-4 py-3 px-3 rounded-lg bg-white border border-gray-400 text-gray-800 font-semibold focus:border-purple-500 focus:outline-none"
                            />

                            <button
                                type="submit"
                                className="md:w-32 bg-purple-700 text-white font-bold py-3 px-6 rounded-lg mt-4 hover:bg-purple-600 transition duration-300"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
            </div>

            <div className="absolute right-10 top-10 hidden lg:block">
                <img
                    className="w-96"
                    src={contactImage}
                    alt="contact"
                />
            </div>
        </div>
    );
}