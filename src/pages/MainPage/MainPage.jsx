import { useQuery } from "react-query";
import { AlphabetNavigationList } from "components/AlphabetNavigationList";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { SearchInput } from "components/SearchInput";
import { DrinksByNameView } from "views/DrinksByNameView";
import axios from "axios";
import { MainThumb } from "./MainPage.styled";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("searchQuery");
  const navigate = useNavigate();

  //activate by search form submit:
  const { data, isSuccess, isLoading } = useQuery(
    ["drinks", searchQuery],
    () =>
      axios.get(
        `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchQuery}`
      ),
    {
      enabled: !!searchQuery,
    }
  );

  const newSearch = (newSearchQuery) => {
    if (newSearchQuery === searchQuery) {
      return;
    }

    setSearchParams({ searchQuery: newSearchQuery });
    navigate(`/drinks/?searchQuery=${newSearchQuery}`, { replace: true });
  };

  const hasDrinks = Boolean(data?.data?.drinks);

  return (
    <MainThumb>
      <SearchInput onSubmit={newSearch} />
      <AlphabetNavigationList />

      {isLoading && <p>Load list...</p>}
      {isSuccess && !hasDrinks && <p>No drinks with name {searchQuery} </p>}
      {isSuccess && hasDrinks ? (
        <DrinksByNameView
          drinks={data?.data?.drinks}
          searchValue={searchQuery}
        />
      ) : (
        <Outlet />
      )}
    </MainThumb>
  );
};
export default MainPage;
