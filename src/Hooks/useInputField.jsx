import { useState } from "react";

const useInputField = (defaultValue) => {
    const [fieldValue, setFieldValue] = useState(defaultValue);
    const handleFieldOnChange = (e) => {
        setFieldValue(e.target.value);
        // console.log("hello i'm new hooks");
    };
    return [fieldValue, handleFieldOnChange];
};

export default useInputField;
