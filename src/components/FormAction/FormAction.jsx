import React from "react";

const FormAction = () => {
    const handleFormAction = (formData) => {
        console.log(formData.get("name"));
        console.log(formData.get("email"));
    };
    return (
        <>
            <form className="mt-5 space-y-2" action={handleFormAction}>
                <input
                    name="name"
                    className="border rounded-sm p-2 placeholder:pl-2"
                    type="text"
                    placeholder="Name"
                />
                <br />
                <input
                    name="email"
                    className="border rounded-sm p-2 placeholder:pl-2"
                    type="text"
                    placeholder="Email"
                />
                <br />
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                />
            </form>
        </>
    );
};

export default FormAction;
