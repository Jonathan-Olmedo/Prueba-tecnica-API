import LeftPanel from "../components/LeftPanel";
import RightPanel from "../components/RightPanel";
import CenterPanel from "../components/CenterPanel";
import Header from "../components/header";
import { HomeStyled } from "../components/styles";
import { useState, useEffect } from "react";

const Home = () => {
  const [history, setHistory] = useState([]);
  const [countryActive, setCountryActive] = useState([]);
  const handleAddcountry = (id) => {
    const itemOfHistory = country.find((element) => element.cca2 === id);
    const itemOfHistoryUpdate = { ...itemOfHistory, count: 1 };
    return itemOfHistoryUpdate;
  };
  const handleSelectNewCountry = (id) => {
    setCountryActive(country.find((element) => element.cca2 === id));
    if (!history.some((item) => item.cca2 === id)) {
      setHistory([...history, handleAddcountry(id)]);
    } else {
      setHistory(
        history.map((item) => ({
          ...item,
          count: item.cca2 === id ? item.count + 1 : item.count,
        }))
      );
    }
  };

  const [country, setCountry] = useState([]);
  useEffect(() => {
    fetch(
      "https://restcountries.com/v3.1/all?fields=name,cca2,idd,continents,currencies"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountry(data);
      });
  }, []);
  return (
    <>
      <Header />
      <HomeStyled>
        <LeftPanel
          country={country}
          handleSelectNewCountry={handleSelectNewCountry}
        />
        <CenterPanel country={countryActive} />
        <RightPanel
          history={history}
          handleSelectNewCountry={handleSelectNewCountry}
        />
      </HomeStyled>
    </>
  );
};

export default Home;
