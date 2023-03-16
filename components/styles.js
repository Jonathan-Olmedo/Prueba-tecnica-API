// ./styles.js
import styled from "styled-components";

export const HomeStyled = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 767px){
    flex-wrap: wrap;
  }
`;

export const HeaderStyled = styled.div`
  text-align: center;
  font-size: 4.5rem;
  font-weight: bold;
`;

export const ContaierLeftPanel = styled.div`
  text-align: center;
`;

export const LeftPanelStyled = styled.div`
  ::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #939999; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }

  ::-webkit-scrollbar-button:vertical:increment {
    height: 10px;
    background-size: 25px 40px;
    background-repeat: no-repeat;
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    height: 10px;
    background-size: 25px 40px;
    background-repeat: no-repeat;
  }
  width: 300px;
  height: 450px;
  border: 5px solid #000;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    rgba(13, 13, 13, 1) 0%,
    rgba(13, 13, 13, 1) 75%,
    rgba(0, 0, 0, 1) 75%,
    rgba(0, 0, 0, 1) 90%,
    rgba(13, 13, 13, 1) 90%,
    rgba(13, 13, 13, 1) 100%
  );
  padding: 20px;
  overflow-y: scroll;
  button {
    display: block;
    padding: 5px;
    font-size: 18px;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    color: #eaeaea;
    position: relative;

    &:hover {
      opacity: 1;
      color: #ff595a;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0;
      bottom: 0;
      left: 0;
      background-color: #fbfbfb;
      visibility: hidden;
      transition: all 200ms ease;
    }
    &:hover:before {
      visibility: visible;
      height: 3px;
      background-color: #ff595a;
      border-radius: 20px;
    }
  }
  h1 {
    text-align: center;
  }
`;
export const ContainerCenterPanel = styled.div`
  text-align: center;
`;

export const CenterPanellStyled = styled.div`
  width: 300px;
  height: 450px;
  border-radius: 20px;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 0%,
    rgba(0, 0, 0, 1) 45%,
    rgba(255, 89, 90, 1) 45%,
    rgba(255, 89, 90, 1) 55%,
    rgba(0, 0, 0, 1) 55%,
    rgba(0, 0, 0, 1) 100%
  );
  padding: 20px;
  font-weight: 500;
  color: #eaeaea;
  h1 {
    text-align: center;
  }
  p {
    font-size: 18px;
  }
  span {
    color: #eaeaea;
    font-weight: bold;
    font-size: 18px;
  }
`;

export const ContainerRightPanel = styled.div`
  text-align: center;
`;

export const RightPanelStyled = styled.div`
  ::-webkit-scrollbar {
    width: 12px; /* width of the entire scrollbar */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #939999; /* color of the scroll thumb */
    border-radius: 20px; /* roundness of the scroll thumb */
  }

  ::-webkit-scrollbar-button:vertical:increment {
    height: 10px;
    background-size: 25px 40px;
    background-repeat: no-repeat;
  }

  ::-webkit-scrollbar-button:vertical:decrement {
    height: 10px;
    background-size: 25px 40px;
    background-repeat: no-repeat;
  }
  width: 300px;
  height: 450px;
  border: 5px solid #000;
  border-radius: 20px;
  background: linear-gradient(
    90deg,
    rgba(13, 13, 13, 1) 0%,
    rgba(13, 13, 13, 1) 75%,
    rgba(0, 0, 0, 1) 75%,
    rgba(0, 0, 0, 1) 90%,
    rgba(13, 13, 13, 1) 90%,
    rgba(13, 13, 13, 1) 100%
  );
  padding: 20px;
  overflow-y: auto;
  button {
    display: block;
    padding: 5px;
    font-size: 18px;
    text-align: left;
    background: none;
    border: none;
    cursor: pointer;
    color: #eaeaea;
    position: relative;

    &:hover {
      opacity: 1;
      color: #ff595a;
    }

    &:before {
      content: "";
      position: absolute;
      width: 100%;
      height: 0;
      bottom: 0;
      left: 0;
      background-color: #fbfbfb;
      visibility: hidden;
      transition: all 200ms ease;
    }
    &:hover:before {
      visibility: visible;
      height: 3px;
      background-color: #ff595a;
      border-radius: 20px;
    }
  }
  h1 {
    text-align: center;
  }
  div {
    display: flex;
    width: 100%;
    justify-content: space-between;
  }
  span {
    color: #eaeaea;
    font-weight: bold;
    font-size: 18px;
  }
`;


