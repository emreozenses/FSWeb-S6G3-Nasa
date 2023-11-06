import styled from "styled-components";

const Header = () => {
  const HeaderTwo = styled.h2`
    color: red;
    font-family: helvetica;
    &:hover {color: blue};
  `;
  return (
    <div className="header">
      <img
        id="logo"
        src="https://api.nasa.gov/assets/img/favicons/favicon-192.png"
        alt="NASA logo"
      />
      <HeaderTwo> Astronomy Picture of the Day</HeaderTwo>
    </div>
  );
};

export default Header;
