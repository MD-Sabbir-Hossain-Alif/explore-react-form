import React, { useState } from "react";

const ProductForm = ({ handleAddProduct }) => {
    const [error, setError] = useState("");

    const handleProductSubmit = (e) => {
        e.preventDefault();

        // i cerate reuseable function for geting field value
        const getValue = (name) => e.target[name].value;

        const name = getValue("name");
        const price = getValue("price");
        const quantity = getValue("quantity");

        if (name.length === 0) {
            setError("Please provide valid Name");
            return;
        } else if (price.length === 0) {
            setError("Please provide valid Price");
            return;
        } else if (price < 0) {
            setError("Price can't be nagative");
            return;
        } else if (quantity.length === 0) {
            setError("Please provide valid Quantity");
            return;
        } else if (quantity < 0) {
            setError("Quantity can't be nagative");
            return;
        } else {
            setError("");
        }

        // new product data
        const newProduct = {
            name,
            price,
            quantity,
        };
        // console.log(newProduct);
        handleAddProduct(newProduct);
    };

    return (
        <div>
            <form
                onSubmit={handleProductSubmit}
                className="mt-5 space-y-2"
                action=""
            >
                <input
                    name="name"
                    className="border rounded-sm p-2"
                    type="text"
                    placeholder="Your Name"
                />
                <br />
                <input
                    name="price"
                    className="border rounded-sm p-2"
                    type="text"
                    placeholder="Product Price"
                />
                <br />
                <input
                    name="quantity"
                    className="border rounded-sm p-2"
                    type="text"
                    placeholder="Product Quantity"
                />
                <br />
                <input
                    className="btn btn-primary"
                    type="submit"
                    value="Submit"
                />
            </form>
            <p className="text-red-500">
                <small>{error}</small>
            </p>
        </div>
    );
};

export default ProductForm;
