import { HashRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import SubmitRecipe from "./pages/SubmitRecipe";

function App() {
  return (
    <div className="w-[400px] min-h-[500px] p-6 bg-primary rounded-lg relative">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe/add" element={<SubmitRecipe />} />
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
