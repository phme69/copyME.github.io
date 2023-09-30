import React, {useState} from 'react';
import "./index.css"
import SendMe from "./SendMe.jsx";

function App() {

    let [form,setForm] = useState(<div className="mt-10 flex justify-center text-2xl font-serif">Contact me at - @parvezhossainme</div>)
    let [name,setName] = useState(null)
    let [pass,setPass] = useState(null)

    const showSend = (e) => {
        e.preventDefault();
        if(name === "phme69" && pass === "vallagena"){
            setForm(<SendMe />); // update with my jsx form
        } else {
            console.log(name + "  " + pass + " : " + "Does not match bcccccccccccccccc")
        }
    }

    return (
    <>
        <div className="mx-5 mt-3 flex flex-wrap justify-center  space-y-20">
            <form className="w-full border p-1 border-green-500 grid grid-cols-1 grid-rows-3">
                <label>
                    <span className="text-purple-800 font-mono font-semibold">Username :</span>
                    <input className="mx-5 outline-0" type="text" name="uname : " placeholder="your username..." onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    <span className="text-purple-800 font-mono font-semibold">Password :</span>
                    <input className="mx-5 outline-0" type="password" name="pass : " placeholder="your password..." onChange={(e) => setPass(e.target.value)} />
                </label>
                <button onClick={showSend}  className="text-purple-800 font-mono font-semibold ring-3 text-xl rounded-xl p-0.5 bg-green-400"> Login </button>
            </form>
           </div>
        <h1>{form}</h1>
    </>
    )
}

export default App
