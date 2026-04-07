import React, { use } from "react";
import { AssetContext, MoneyContext } from "./FamilyTree";

const Special = ({ name, asset }) => {
    const newAsset = use(AssetContext);
    const [money, setMoney] = use(MoneyContext);
    return (
        <div>
            <h2>Special: {name}</h2>
            <p className="text-cyan-500">asset: {asset}</p>
            <p className="text-teal-500">newAsset: {newAsset}</p>

            <button
                onClick={() => setMoney(money - 2000)}
                className="btn btn-error"
            >
                Spend 2000Tk
            </button>
        </div>
    );
};

export default Special;
