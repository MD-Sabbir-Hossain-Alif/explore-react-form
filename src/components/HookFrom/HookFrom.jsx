import React from "react";
import useInputField from "../../Hooks/useInputField";

const HookFrom = () => {
    // my first custom hook [date: 06-05-26 time: 1:14am]
    const [name, setName] = useInputField("");
    const [email, setEmail] = useInputField("");
    const [password, setPassword] = useInputField("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(
            "submit",
            "Name:",
            name,
            "Email:",
            email,
            "Password:",
            password,
        );

        // making and form data object
        const formData = {
            name: name,
            email: email,
            password: password,
        };
        console.log(formData);
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-5 space-y-2" action="">
                <br />
                <input
                    defaultValue={name}
                    onChange={setName}
                    className="border rounded-sm p-2"
                    type="text"
                    placeholder="Name"
                    required
                />
                <br />
                <input
                    defaultValue={email}
                    onChange={setEmail}
                    className="border rounded-sm p-2"
                    type="email"
                    placeholder="email"
                    required
                />
                <br />
                <input
                    defaultValue={password}
                    onChange={setPassword}
                    className="border rounded-sm p-2"
                    type="password"
                    placeholder="Password"
                    required
                />
                <br />
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                />
            </form>
        </div>
    );
};

export default HookFrom;
