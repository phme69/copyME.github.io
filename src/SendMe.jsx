import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

// npm install @emailjs/browser --save
const SendMe = () => {
    const form = useRef();
    const [modalMessage, setModalMessage] = useState("");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [message, setMessage] = useState("");

    const openModal = (message) => {
        setModalMessage(message);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setMessage(""); // Clear the text area after closing the modal
    };

    const sendEmail = (e) => {
        e.preventDefault();

        const messageValue = form.current.message.value.trim();
        if (!messageValue) {
            openModal("Please enter a message before submitting.");
            return;
        }

        emailjs
            .sendForm(
                "parvezhossainme_Server",
                "template_pdk1y1r",
                form.current,
                "_OgLmRLpUmANzds8j"
            )
            .then(
                (result) => {
                    openModal("Mail has been successfully sent!");
                },
                (error) => {
                    openModal(
                        "Your server is currently down. Please try again later."
                    );
                }
            );
    };

    let tArea =
        "h-96 w-full bg-gray-50 text-blue-800 outline-0 whitespace-pre-wrap transition-all duration-300 ease-in-out transform";
    let tDiv =
        "ring-1 ring-purple-600 border-spacing-4 px-3 py-1 bg-gray-50 rounded-lg";
    let tSub =
        "px-5 py-1 border-4 border-purple-400 rounded-b-lg text-3xl text-purple-600 font-semibold bg-green-100 hover:bg-green-200 transition-colors duration-300";

    return (
        <div>
            <form
                ref={form}
                onSubmit={sendEmail}
                className="h-screen px-5 py-3 space-y-1">
                <div>
                    <div className={tDiv}>
                        <textarea
                            name="message"
                            className={tArea}
                            placeholder="Enter something..."
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                </div>
                <button className={tSub} type="submit">
                    Submit
                </button>
            </form>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-5 rounded-lg shadow-lg text-center space-y-3">
                        <p>{modalMessage}</p>
                        <button
                            className="px-4 py-2 bg-purple-600 text-white rounded-lg"
                            onClick={closeModal}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SendMe;

// import React, { useRef, useState } from "react";
// import emailjs from "@emailjs/browser";

// // npm install @emailjs/browser --save
// const SendMe = () => {
//     const form = useRef();
//     const [modalMessage, setModalMessage] = useState("");
//     const [isModalOpen, setIsModalOpen] = useState(false);

//     const openModal = (message) => {
//         setModalMessage(message);
//         setIsModalOpen(true);
//     };

//     const closeModal = () => {
//         setIsModalOpen(false);
//     };

//     const sendEmail = (e) => {
//         e.preventDefault();

//         const messageValue = form.current.message.value.trim();
//         if (!messageValue) {
//             openModal("Please enter a message before submitting.");
//             return;
//         }

//         emailjs
//             .sendForm(
//                 "parvezhossainme_Server",
//                 "template_pdk1y1r",
//                 form.current,
//                 "_OgLmRLpUmANzds8j"
//             )
//             .then(
//                 (result) => {
//                     openModal("Mail has been successfully sent!");
//                 },
//                 (error) => {
//                     openModal(
//                         "Your server is currently down. Please try again later."
//                     );
//                 }
//             );
//     };

//     let tArea =
//         "h-96 w-full bg-gray-50 text-blue-800 outline-0 whitespace-pre-wrap";
//     let tDiv = "ring-1 ring-purple-600 border-spacing-4 px-3 py-1 bg-gray-50";
//     let tSub =
//         "px-5 py-1 border-4 border-purple-400 rounded-b-lg text-3xl text-purple-600 font-semibold bg-green-100";

//     return (
//         <div>
//             <form
//                 ref={form}
//                 onSubmit={sendEmail}
//                 className="h-screen px-5 py-3 space-y-1">
//                 <div>
//                     <div className={tDiv}>
//                         <textarea
//                             name="message"
//                             className={tArea}
//                             placeholder="Enter something..."
//                         />
//                     </div>
//                 </div>
//                 <button className={tSub} type="submit">
//                     Submit
//                 </button>
//             </form>

//             {isModalOpen && (
//                 <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//                     <div className="bg-white p-5 rounded-lg shadow-lg text-center space-y-3">
//                         <p>{modalMessage}</p>
//                         <button
//                             className="px-4 py-2 bg-purple-600 text-white rounded-lg"
//                             onClick={closeModal}>
//                             Close
//                         </button>
//                     </div>
//                 </div>
//             )}
//         </div>
//     );
// };

// export default SendMe;
