import React, {useRef} from 'react';
import emailjs from "@emailjs/browser";

// npm install @emailjs/browser --save
const SendMe = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('parvezhossainme_Server', 'template_pdk1y1r', form.current, '_OgLmRLpUmANzds8j')
            .then((result) => {
                alert(result.text + "Mail has been successfully sent!");
                e.reload();
                // console.log(result.text);
            }, (error) => {
                alert(error.text + "Your server is currently down :v");
                // console.log(error.text);
            });
    };

    let tArea = "h-96 w-full bg-gray-50 text-blue-800 outline-0"
    let tDiv = "ring-1 ring-purple-600 border-spacing-4 px-3 py-1 bg-gray-50"
    let tSub = "px-5 py-1 border-4 border-purple-400 rounded-b-lg text-3xl text-purple-600 font-semibold bg-green-100"

    return (
        <div >
            <form ref={form} onSubmit={sendEmail} className="h-screen px-5 py-3  space-y-1">
                <div>
                    <div className={tDiv}>
                        <textarea name="message" className={tArea} placeholder="Enter something..."/>
                    </div>
                </div>
                <button className={tSub} type='submit' > Submit </button>
            </form>
        </div>
    );
};

export default SendMe;