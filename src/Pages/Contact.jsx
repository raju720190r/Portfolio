import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import Swal from "sweetalert2"

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wjymr5b', 'template_gavvrlp', form.current, 'SNwceQhCIS73p3W4J')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Send Email Sucessfully',
            showConfirmButton: false,
            timer: 1500
        })
    };
    return (
        <div>
            <div className="py-10 mx-5 md:mx-16">
                <h2 className="text-3xl sm:text-5xl text-center border-b-2 pb-3 text-info">
                    <i class="fa-solid fa-address-card mr-5"></i>Contact With Me
                </h2>
            </div>
            <div className="w-full md:w-[700px] mx-auto p-5 " data-aos="fade-up">
                <form ref={form} onSubmit={sendEmail}>
                    <div className=" grid grid-cols-1 md:grid-cols-2 gap-5 mb-10">
                        <div>
                            <label htmlFor="" className="label">
                                Name:
                            </label>
                            <input
                                name="from_name"
                                type="text"
                                className="bg-transparent border-2 h-10 px-2 w-full"
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="" className="label">
                                Email:
                            </label>
                            <input
                                name="from_email"
                                type="email"
                                className="bg-transparent border-2 h-10 px-2 w-full"
                                required
                            />
                        </div>
                    </div>
                    <label htmlFor="" className="label">
                        Your Message
                    </label>
                    <textarea
                        name="message"
                        type="text"
                        className="bg-transparent border-2 w-full h-36 px-2"
                        required
                    />
                    <div className="text-center mt-5">
                        <button className="btn btn-outline btn-info border-4 rounded-none">
                            Send Message
                        </button>
                    </div>
                </form>
            </div>
            <div className="px-5 py-20 text-center grid md:grid-cols-3 gap-10">
                <div className="text-center">
                    <i class="fa-solid fa-paper-plane text-xl text-info"></i>
                    <h3 className="text-xl  flex items-center mt-3">
                        <a href="mailto:mdrajuahmmed72018@gmail.com">
                            mdrajuahmmed72018@gmail.com
                        </a>
                    </h3>
                </div>
                <div className="text-center">
                    <i class="fa-solid fa-location-dot text-xl text-info"></i>
                    <h3 className="text-xl flex items-center mt-3"><span className="mr-3"></span>Jamalpur,Bangladesh</h3>
                </div>
                <div className="text-center">
                    <i class="fa-solid fa-phone-flip text-xl text-info"></i>
                    <h3 className="text-xl flex mt-3">
                        <a href="tel:+8801984139733">+8801984139733</a>
                    </h3>
                </div>
            </div>
        </div>
    );
};

export default Contact;