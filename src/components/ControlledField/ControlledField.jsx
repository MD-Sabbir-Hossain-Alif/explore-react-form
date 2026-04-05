import React, { useState } from "react";

const ControlledField = () => {
    const [password, setPassword] = useState("secret");
    const [passwordError, setPasswordError] = useState("");
    const [passErrorOnSubmit, setPassErrorOnSubmit] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submit!");

        if (password.length < 6) {
            setPassErrorOnSubmit("password must be 6 characters or longer");
        } else {
            setPassErrorOnSubmit("");
        }
    };

    const handlePasswordOnChange = (e) => {
        setPassword(e.target.value);
        // console.log(e.target.value);

        // live password error check
        if (password.length < 6) {
            setPasswordError("password must be 6 characters or longer");
        } else {
            setPasswordError("");
        }
    };
    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-5 space-y-2" action="">
                <br />
                <input
                    name="email"
                    className="border rounded-sm p-2"
                    type="text"
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    name="password"
                    className="border rounded-sm p-2"
                    type="text"
                    placeholder="Password"
                    required
                    defaultValue={password}
                    onChange={handlePasswordOnChange}
                />

                {/* on submit password error check */}
                <p className="text-red-500">
                    <small>{passwordError}</small>
                </p>
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                />
            </form>

            {/* live password error check */}
            <p className="text-red-500">
                <small>{passErrorOnSubmit}</small>
            </p>
        </div>
    );
};

export default ControlledField;
