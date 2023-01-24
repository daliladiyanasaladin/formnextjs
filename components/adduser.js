import { useReducer } from "react"
import Success from "./success"
import Errors from "./error"
import { BiPlus } from 'react-icons/bi'
import { useState } from "react"


const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function AddUser(){

    const [formData, setFormData] = useReducer(formReducer, {});
    const [email,setemail]=useState("");
    const [phone,setphone]=useState("");
    const [validation,setvalidation]=useState(false);
    const [name,setname]=useState("");
    const [submit, submitted]=useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        const userdata={name,email,phone};
        const validemail = () => {
            const regEx = /[a-zA-Z][a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/;
            if(regEx.test(email)){
                setMessage("Email is valid");
            } else if (regEx.test(email) && email !== "" ){
                setMessage("Email is not valid");
            }else{
                setMessage(""); 
            }

        };
        const validtext = () => {
            const regEx = /^[a-zA-Z]*$/;
            if(name !=="" || regEx.test(name)){
                setMessage("Name is valid");
            } else{
                setMessage("Name is invalid"); 
            }
            };

            const validnumber = () => {
                const regEx =/^\d+$/;
                if(phone !=="" || regEx.test(phone)){
                    setMessage("Number is valid");
                } else{
                    setMessage("Number is invalid"); 
                }
    
               };

              

        console.log(userdata);
        console.log(email);
        console.log(phone);
        console.log(name);
        alert("Subbmitted")

    }

    


    return (
        <form className="grid lg:grid gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input required onMouseDown={e => setvalidation(true)} onChange={e => setname(e.target.value)}type="text"  name="name" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Full Name" />
                {name.length === 0 && validation && <span className="text-red-700">Please fill in the name!</span>}
            </div>
            <div className="input-type">
                <input required  onMouseDown={e => setvalidation(true)} onChange={e => setemail(e.target.value)}type="email"  name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
                {email.length === 0 && validation && <span className="text-red-700">Please fill in the email!</span>}
            </div>
            <div className="input-type">
                <input required onChange={e => setphone(e.target.value)} type="number" name="mobilenumber" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Mobile Number" />
                {phone.length === 0 && validation && <span className="text-red-700">Please fill in the phone!</span>}
            </div>


            <button className="flex justify-center text-md w-2/6 bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
             Submit 
            </button>
        </form>
    )
}