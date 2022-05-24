import axios from "axios";

const baseUrl = axios.create({
  baseURL: "https://www.thecocktaildb.com/api/json/v1/1/",
});

const getDrinksByName = async (searchQuery) => {
  const resp = await baseUrl.get(`search.php?s=${searchQuery}`);
  return resp;
};

const getDrinksByFirstLetter = async (letter) => {
  const resp = await baseUrl.get(`search.php?f=${letter}`);
  return resp;
};

const getRandomDrink = async () => {
  const resp = await baseUrl.get("random.php");
  return resp;
};

const getDrinkById = async (id) => {
  const resp = await baseUrl.get(`lookup.php?i=${id}`);
  return resp;
};

const getAlcocholicDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?a=Alcoholic`);
  return resp;
};

const getNonAlcocholicDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?a=Non_Alcoholic`);
  return resp;
};

const getOrdinaryDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=Ordinary_Drink`);
  return resp;
};

const getCoktailDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=Cocktail`);
  return resp;
};

export {
  getDrinksByName,
  getDrinksByFirstLetter,
  getRandomDrink,
  getDrinkById,
  getAlcocholicDrinks,
  getNonAlcocholicDrinks,
  getOrdinaryDrinks,
  getCoktailDrinks,
};
