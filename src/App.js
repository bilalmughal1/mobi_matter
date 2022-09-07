import "./App.css";
import Card from "./components/Card.jsx";
import NavigationBar from "./components/NavigationBar";
import jsonFile from "./products.json";

function App() {
  const results = jsonFile.result;
  return (
    <>
      <NavigationBar />
      <main>
        <div className="album py-5 bg-light">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              {results.map((e, k) => (
                <Card key={k} props={e} />
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
