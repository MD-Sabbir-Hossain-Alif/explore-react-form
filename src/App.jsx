import "./App.css";
import SimpleForm from "./components/SimpleForm/SimpleForm";

function App() {
    return (
        <div className="flex flex-col items-center justify-center">
            <h1 className="text-center mt-10 text-5xl">Explore React Form</h1>
            <SimpleForm></SimpleForm>
        </div>
    );
}

export default App;
