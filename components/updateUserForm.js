import { useReducer } from "react"
import { BiBrush } from 'react-icons/bi'
import Errors from "./error"
import Success from "./success"


const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function UpdateUserForm(){

    const [formData, setFormData] = useReducer(formReducer, {})

    const handleSubmit = (e) => {
        e.preventDefault();
        if(Object.keys(formData).length == 0) return console.log("Don't have Form Data");
        console.log(formData)
    }

    if(Object.keys(formData).length > 0) return <Errors message={"Error"}></Errors>

    return (
        <form className="grid lg:grid-cols-2 w-4/6 gap-4" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="fullname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Full Name" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email Address" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} name="mobile number" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Mobile Number" />
            </div>
           


          

            <button className="flex justify-center text-md w-2/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
             Update <span className="px-1"><BiBrush size={24}></BiBrush></span>
            </button>

        </form>
    )
}