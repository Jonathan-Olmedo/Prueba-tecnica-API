import { LeftPanelStyled, ContaierLeftPanel } from "../components/styles";

const LeftPanel = ({ country, handleSelectNewCountry }) => {
  return (
    <ContaierLeftPanel>
      <h1>COUNTRIES</h1>
      <LeftPanelStyled>
        {country
          .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
          .map((country) => (
            <button
              key={country.cca2}
              onClick={() => handleSelectNewCountry(country.cca2)}
            >
              {country.name.common}
            </button>
          ))}
      </LeftPanelStyled>
    </ContaierLeftPanel>
  );
};

export default LeftPanel;