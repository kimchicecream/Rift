import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import "./Navigation.css";

function Navigation() {
  return (
    <div className='navigation-container'>
      <div className='logo-container'>
        <img src='../../public/babbl-logo.png' />
      </div>
      <div className='signup-login-container'>
        <OpenModalButton
          buttonText="Log In"
          modalComponent={<LoginFormModal />}
          className='login-button'
        />
        <OpenModalButton
          buttonText="Sign Up"
          modalComponent={<SignupFormModal />}
          className='signup-button'
        />
      </div>
    </div>
  );
}

export default Navigation;
