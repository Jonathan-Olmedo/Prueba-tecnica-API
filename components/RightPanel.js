import { RightPanelStyled, ContainerRightPanel } from "../components/styles";

const RightPanel = ({ history, handleSelectNewCountry }) => {
  return (
    <ContainerRightPanel data-test-id="rightPanel">
      <h1>HISTORY</h1>
      <RightPanelStyled>
        {history
          .sort((a, b) => (a.name.common > b.name.common ? 1 : -1))
          .map((country) => (
            <div>
              <button
                key={country.cca2}
                onClick={() => handleSelectNewCountry(country.cca2)}
              >
                {country.name.common}
              </button>
              <span>{country.count}</span>
            </div>
          ))}
      </RightPanelStyled>
    </ContainerRightPanel>
  );
};

export default RightPanel;