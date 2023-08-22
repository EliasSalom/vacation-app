import  { FC, useState } from "react";

interface SignUpFormProps {
onSubmit: (formData: SignUpFormData) => void;
}

interface SignUpFormData {
firstName: string;
lastName: string;
email: string;
password: string; 
}

 const initialFormData: SignUpFormData = {
firstName: "",
lastName: "",
email: "",
password: "",
};

export const SignUpForm: FC<SignUpFormProps> = ({ onSubmit }) => {
const [formData, setFormData] = useState<SignUpFormData>(initialFormData);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
};

const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
};

return (
    <form onSubmit={handleSubmit}>
    <div>
        <label>First Name</label>
        <input
        type="text"
        name="firstName"
        value={formData.firstName}
        onChange={handleChange}
        required
        />
    </div>
    <div>
        <label>Last Name</label>
        <input
        type="text"
        name="lastName"
        value={formData.lastName}
        onChange={handleChange}
        required
        />
    </div>
    <div>
        <label>Email</label>
        <input
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
        />
    </div>
    <div>
        <label>Password</label>
        <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
        />
    </div>
    <div>
        <button type={"submit"}>Sign Up</button>
    </div>
    </form>
);
};

