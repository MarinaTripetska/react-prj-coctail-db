import { useQuery } from "react-query";
import { AlphabetNavigationList } from "components/AlphabetNavigationList";
import { Outlet, useNavigate, useSearchParams } from "react-router-dom";
import { SearchInput } from "components/SearchInput";
import { DrinksByNameView } from "views/DrinksByNameView";
import { BoldTxt, MainThumb, NoResultTxt } from "./MainPage.styled";
import { Loader } from "components/Loader";
import { Toast } from "components/Toast";
import { getDrinksByName } from "APIoperations/getRequests";

const MainPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchQuery = searchParams.get("searchQuery");
  const navigate = useNavigate();

  //activate by search form submit:
  const { data, isSuccess, isLoading } = useQuery(
    ["drinks", searchQuery],

    () => getDrinksByName(searchQuery),

    {
      enabled: !!searchQuery,
      onError: (error) => {
        Toast.notifyERROR(error.message);
      },
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

      {isLoading && <Loader /> /*Loading drinks when we sherch by name */}

      {
        isSuccess && !hasDrinks && (
          <NoResultTxt>
            No drinks with name <BoldTxt> {searchQuery}</BoldTxt>{" "}
          </NoResultTxt>
        ) /*Nothink found when we sherch by name */
      }
      {isSuccess && hasDrinks ? (
        <DrinksByNameView
          drinks={data?.data?.drinks}
          searchValue={searchQuery}
        /> /*Founded drinks was sherch by name */
      ) : (
        <Outlet /> /*or Alphabet searching*/
      )}
    </MainThumb>
  );
};
export default MainPage;
