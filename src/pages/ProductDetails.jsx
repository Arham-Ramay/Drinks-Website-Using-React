import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchSingleCocktails } from "../redux/features/cocktailSlice";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../components/Layout";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const { cocktail, loading, error } = useSelector((state) => state.app);
  const { pid } = useParams();

  useEffect(() => {
    const apiUrl = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${pid}`;
    console.log("API URL:", apiUrl);
    console.log("fetching",pid)
    dispatch(fetchSingleCocktails({ idDrink:pid }));
  }, [dispatch, pid]);

  if (loading) {
    return(
      <div className="bodySpinner">
    <div className="spinner">
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
    </div>
    </div>
    
    )
  }

  if (error) {
    return <p>Error: {error}</p>; 
  }

  
  if (!cocktail || cocktail.length===0) {
    console.log("No cocktail data available:", cocktail);
    return <p>No cocktail data available.</p>;
  }

  // Modify this part based on the actual shape of your `cocktail` data
  const {strInstructions,dateModified,strGlass, strDrink, strCategory, strDrinkThumb } = cocktail[0];
console.log("hello data",cocktail[0].strDrink)
  return (
    <Layout>
      <div className="container" style={{marginTop:"100px"}}>
        <div className="row">
          <Link to="/">Back To Home</Link>
          <div className="col-lg-4">
            <img
              src={strDrinkThumb}
              alt=""
              className="img-fluid rounded shadow-lg"
            />
          </div>
          <div className="col-lg-8 shadow-lg">
            <h1>{strDrink}</h1>
            <p>Category: {strCategory}</p>
            <h4>Glass Type:</h4>
            <p>{strGlass}</p>
            <h4>Manufacturing Date:</h4>
            <p>{dateModified}</p>
            <h4>Instructions:</h4>
            <p>{strInstructions}</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProductDetails;