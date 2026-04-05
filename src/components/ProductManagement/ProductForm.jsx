import React from "react";

const ProductForm = ({ handleAddProduct }) => {
    const handleProductSubmit = (e) => {
        e.preventDefault();

        // i cerate reuseable function for geting field value
        const getValue = (name) => e.target[name].value;

        // new product data
        const newProduct = {
            name: getValue("name"),
            price: getValue("price"),
            quantity: getValue("quantity"),
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
        </div>
    );
};

export default ProductForm;
