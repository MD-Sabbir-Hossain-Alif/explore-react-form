import React, { useRef } from "react";

const UncontrolledField = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // const email = emailRef.current.value;
        // console.log(email);
        // const password = passwordRef.current.value;
        // console.log(password);
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="mt-5 space-y-2" action="">
                <br />
                <input
                    ref={emailRef}
                    name="email"
                    className="border rounded-sm p-2"
                    type="text"
                    placeholder="Email"
                    required
                />
                <br />
                <input
                    ref={passwordRef}
                    name="password"
                    className="border rounded-sm p-2"
                    type="text"
                    placeholder="Password"
                    required
                />

                {/* on submit password error check
                <p className="text-red-500">
                    <small>{passwordError}</small>
                </p> */}
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

export default UncontrolledField;
