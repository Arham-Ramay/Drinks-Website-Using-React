import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import PageNotFound from "./components/PageNotFound";
const App = () => {
  return (
    <>
   <Router>
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/products/:pid" element={<ProductDetails />} />
    <Route path="*" element={<PageNotFound />} />
  </Routes>
</Router>
    </>
  );
};

export default App;
