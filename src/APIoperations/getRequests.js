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

const getShakeDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=Shake`);
  return resp;
};
const getOtherDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=Other/Unknown`);
  return resp;
};
const getCocoaDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=Cocoa`);
  return resp;
};
const getShotDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=Shot`);
  return resp;
};
const getCoffeeTeaDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=coffee%20/%20tea`);
  return resp;
};
const getHomemadeLiqueurDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=Homemade%20Liqueur`);
  return resp;
};
const getPunchPartyDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=Punch%20/%20Party%20Drink`);
  return resp;
};
const getSoftDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=Soft%20Drink`);
  return resp;
};
const getBeerDrinks = async () => {
  const resp = await baseUrl.get(`filter.php?c=Beer`);
  return resp;
};

const getIngredientsIcons = async (ing) => {
  const resp = await axios.get(
    `https://www.thecocktaildb.com/images/ingredients/${ing}-Small.png`
  );
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
  getShakeDrinks,
  getCoktailDrinks,
  getIngredientsIcons,
  getOtherDrinks,
  getCocoaDrinks,
  getShotDrinks,
  getCoffeeTeaDrinks,
  getHomemadeLiqueurDrinks,
  getPunchPartyDrinks,
  getBeerDrinks,
  getSoftDrinks,
};
