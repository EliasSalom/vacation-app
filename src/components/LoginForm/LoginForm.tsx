import {FC, useState} from "react";


// interface Props{
//     onSubmit:()=>void
//     onChange:()=>void
//     label: string
// }

interface InputsValue{
    email:string;
    password: string
}
export const LoginForm:FC = ()=>{
    const [inputs, setInputs] = useState<InputsValue>({
        email:"", password:""
    })

    console.log(inputs)
    return(
        <form>
            <div>
                <label>Email/userName</label>
                <input placeholder={"Email"} type={"email"} onChange={(e)=>setInputs({...inputs,email:e.target.value})}/>
            </div>
            <div>
                <label>Password</label>
                <input placeholder={"Password"} onChange={(e)=>setInputs({...inputs,password:e.target.value})}/>
            </div>
            <div>
                <button type={"submit"}>submit</button>
            </div>
        </form>
    )
}
