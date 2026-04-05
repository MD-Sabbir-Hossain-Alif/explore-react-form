import React from "react";

const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("form submited!");
        // alert("Submited!");
        console.log(e.target.name.value);
        console.log(e.target.email.value);
    };
    return (
        <>
            <form onSubmit={handleSubmit} className="mt-5 space-y-2" action="">
                <input
                    name="name"
                    className="border rounded-sm p-2 placeholder:pl-2"
                    type="text"
                    placeholder="Your Name"
                />
                <br />
                <input
                    name="email"
                    className="border rounded-sm p-2 placeholder:pl-2"
                    type="text"
                    placeholder="Your Email"
                />
                <br />
                <input
                    className="border rounded-sm p-2"
                    type="submit"
                    value="Submit"
                />
            </form>
        </>
    );
};

export default SimpleForm;
