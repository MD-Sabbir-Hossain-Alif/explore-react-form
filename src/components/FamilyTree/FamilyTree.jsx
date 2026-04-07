import React, { createContext, useState } from "react";
import Grandpa from "./Grandpa";

export const AssetContext = createContext("");
export const MoneyContext = createContext("");

const FamilyTree = () => {
    const asset = "Diamond";
    const newAsset = "Gold";

    const [money, setMoney] = useState(0);

    return (
        <div id="family-tree" className="text-center text-green-600">
            <h2 className="text-4xl">Fmaily Tree</h2>
            <p>Total Family money: {money}</p>
            <MoneyContext value={[money, setMoney]}>
                <AssetContext.Provider value={newAsset}>
                    <Grandpa asset={asset}></Grandpa>
                </AssetContext.Provider>
            </MoneyContext>
        </div>
    );
};

export default FamilyTree;
