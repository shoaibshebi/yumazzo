import { Suspense, useEffect, useState } from "react";
import Search from "../components/serachbar/Index";
import Recipe from "../components/Recipe";
import Loader from "../components/Loader";
import Page404 from "../components/Page404";
import useRecipe from "../customHooks/useRecipe";
import { IRecipe } from "../interfaces/interfaces";
import { useRenderOnce } from "../customHooks/useRenderOnce";

function Home() {
  const { getRecipes } = useRecipe();
  const [recipes, setRecipes] = useState<Array<IRecipe>>([]);
  const [selectedRecipes, setSelectedRecipes] = useState<IRecipe>();
  const [search, setSearch] = useState("");

  const fetchData = async () => {
    const res = await getRecipes();
    setSelectedRecipes({ ...res[3] });
    setRecipes(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    setSearch("");
  }, [selectedRecipes]);

  return (
    <>
      <Search
        value={search}
        changeValue={setSearch}
        recipes={recipes}
        setSelectedRecipes={setSelectedRecipes}
      />
      <Suspense fallback={<Loader />}>
        {selectedRecipes?.name ? (
          <Recipe recipe={selectedRecipes} />
        ) : (
          <Page404 />
        )}
      </Suspense>
    </>
  );
}

export default Home;
