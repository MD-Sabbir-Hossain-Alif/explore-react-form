import React from "react";

const ProductTable = ({ products, setProducts }) => {
    const total = products.reduce(
        (sum, product) =>
            sum + Number(product.price) * Number(product.quantity),
        0,
    );
    // console.log(total);

    return (
        <div>
            <table className="border text-center">
                <thead>
                    <tr>
                        <th className="border p-2">No. </th>
                        <th className="border p-2">Name</th>
                        <th className="border p-2">Price</th>
                        <th className="border p-2">Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr key={index}>
                            <td className="border p-2">{index + 1}</td>
                            <td className="border p-2">{product.name}</td>
                            <td className="border p-2">{product.price}</td>
                            <td className="border p-2">{product.quantity}x</td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <th colSpan="3" className="text-left p-2">
                            Total: {total}
                        </th>
                        <td className="text-right p-2">
                            <button
                                className="btn btn-secondary"
                                onClick={() => setProducts([])}
                            >
                                Clear
                            </button>
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};

export default ProductTable;
