const toggle = document.getElementById("toggleB");
const basicPriceElement = document.getElementById("basicPrice");
const proffesionalPriceElement = document.getElementById("proffesionalPrice");
const masterPriceElement = document.getElementById("masterPrice");

const annuallyPrices = {
  basic: "199.99",
  professional: "249.99",
  master: "399.99",
};
const monthlyPrices = {
  basic: "19.99",
  professional: "24.99",
  master: "39.99",
};

const setPrices = (prices) => {
  basicPriceElement.innerText = prices.basic;
  proffesionalPriceElement.innerText = prices.professional;
  masterPriceElement.innerText = prices.master;
};

setPrices(annuallyPrices);

const hanndleClick = (e) => {
  toggle.checked ? setPrices(monthlyPrices) : setPrices(annuallyPrices);
};

toggle.addEventListener("click", hanndleClick);
