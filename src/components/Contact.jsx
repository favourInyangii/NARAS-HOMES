import React from "react";
import { toast } from "react-toastify";

const Contact = () => {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");

        const formData = new FormData(event.target);

        formData.append(
            "access_key",
            import.meta.env.VITE_WEB3FORMS_KEY
        );

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData,
        });

        const data = await response.json();

        if (data.success) {
            toast.success("Form Submitted Successfully");
            event.target.reset();
        } else {
            toast.error(data.message);
        }

        setResult("");
    };

    return (
        <div className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="contact">
            <h1 className="text-2xl sm:text-4xl font-bold mb-2">
                Contact{" "}
                <span className="underline underline-offset-4 decoration-1 font-light">
                    Us
                </span>
            </h1>

            <p className="text-gray-500 mb-12 max-w-80 mx-auto">
                Ready to Take that Step? Let's Build Your Future Together
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 text-left">
                        Your Name
                        <input
                            className="w-full border-gray-300 rounded py-3 px-4 mt-2"
                            type="text"
                            name="name"
                            required
                        />
                    </div>

                    <div className="w-full md:w-1/2 text-left md:pl-4">
                        Your Email
                        <input
                            className="w-full border-gray-300 rounded py-3 px-4 mt-2"
                            type="email"
                            name="email"
                            required
                        />
                    </div>
                </div>

                <div className="my-6 text-left">
                    Message
                    <textarea
                        className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none"
                        name="message"
                        required
                    />
                </div>

                <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
                    {result || "Send Message"}
                </button>
            </form>
        </div>
    );
};

export default Contact;
