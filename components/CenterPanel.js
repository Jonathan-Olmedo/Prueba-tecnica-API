import { CenterPanellStyled, ContainerCenterPanel } from "../components/styles";

const CenterPanel = ({ country }) => {
  return (
    <ContainerCenterPanel data-test-id="centerPanel">
      <h1>SELECTION</h1>

      <CenterPanellStyled>
        {!country.name && (
          <>
            <p>Select a country</p>
          </>
        )}
        {country.name && (
          <>
            <p>Name:</p>
            <span>{country.name.common}</span>
          </>
        )}
        {country?.idd?.root ? (
          <>
            <p>Dial Code:</p>
            <span>
              {country.idd.root}
              {country.idd.suffixes[0]}
            </span>
          </>
        ) : (
          <>
            <p>Dial Code:</p>
            <span>Información no disponible</span>
          </>
        )}
        {country.continents ? (
          <>
            <p>Continent:</p>
            <span>{country.continents[0]}</span>
          </>
        ) : (
          <>
            <p>Continent:</p>
            <span>Información no disponible</span>
          </>
        )}
        {country.currencies && Object.values(country.currencies)[0] ? (
          <>
            <p>Curency code:</p>
            <span>{Object.values(country.currencies)[0].name}</span>
          </>
        ) : (
          <>
            <p>Curency code:</p>
            <span>Información no disponible</span>
          </>
        )}
      </CenterPanellStyled>
    </ContainerCenterPanel>
  );
};

export default CenterPanel;