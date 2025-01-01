import { HeaderStyled } from "./Header.Styled";
import logo from "../../Assets/logo.png";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
    </HeaderStyled>
  );
};
