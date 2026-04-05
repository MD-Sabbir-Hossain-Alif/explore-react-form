import "./App.css";
import ControlledField from "./components/ControlledField/ControlledField";
import FormAction from "./components/FormAction/FormAction";
import HookFrom from "./components/HookFrom/HookFrom";
import ProductManagement from "./components/ProductManagement/ProductManagement";
import SimpleForm from "./components/SimpleForm/SimpleForm";
import UncontrolledField from "./components/UncontrolledField/UncontrolledField";

function App() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center mt-10 text-5xl">Explore React Form</h1>
            {/* <SimpleForm></SimpleForm> */}
            {/* <FormAction></FormAction> */}
            {/* <ControlledField></ControlledField> */}
            {/* <UncontrolledField></UncontrolledField> */}
            {/* <HookFrom></HookFrom> */}
            <ProductManagement></ProductManagement>
        </div>
    );
}

export default App;
