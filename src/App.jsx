import Card from "./components/Card/Card";
import Title from "./components/Title/Title";
import data from "./components/Variables/data";

function App() {
    return (
        <div className="App">
            <Title />
            <Card data={data} />
        </div>
    );
}

export default App;
