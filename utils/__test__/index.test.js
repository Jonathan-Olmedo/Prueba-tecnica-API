import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import data from "../fixture/infoCountry";
import LeftPanel from "../../components/LeftPanel";
import CenterPanel from "../../components/CenterPanel";
import RightPanel from "../../components/RightPanel";
import Header from "../../components/header";

describe("Unit test components", () => {
  it("<LeftPanel />", () => {
    const handleSelectNewCountryMock = jest.fn();
    const component = render(
      <LeftPanel
        country={data}
        handleSelectNewCountry={handleSelectNewCountryMock}
      />
    );
    const item = component.getByText("Afghanistan");
    fireEvent.click(item);
    expect(handleSelectNewCountryMock).toHaveBeenCalledTimes(1);
    data.map((item) => {
      const name = component.getByText(item.name.common);
      expect(name).toBeInTheDocument();
    });
  });
  it("<CenterPanel />", () => {
    render(
        <CenterPanel 
            country={data} 
        />);
  });
  it("<RightPanel />", () => {
    const handleSelectNewCountryMock = jest.fn();
    
    render(
        <RightPanel
            history={data}
            handleSelectNewCountry={handleSelectNewCountryMock}
        />);
  });
  it("<header />", () => {
    render(
        <Header/>
        );
  });
});
