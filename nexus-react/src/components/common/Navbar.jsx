import styled from "styled-components";
import { Link } from 'react-router-dom';
import { HiMenuAlt3 } from "react-icons/hi";
import { MdClose } from 'react-icons/md';
import { useDispatch, useSelector } from "react-redux";
import { selectSidebarStatus, setSidebarOff, setSidebarOn } from "../../redux/store/sidebarSlice";
import ProfilePicture from "./ProfilePicture";
import { woman_avatar } from "../../utils/images";
import SearchInput from "../common/SearchInput";

const Navbar = () => {
  const dispatch = useDispatch();
  const sidebarStatus = useSelector(selectSidebarStatus);
  const { currentUser } = useSelector ((state) => state.user);

  return (
    <NavbarWrapper className="d-flex align-items-center">
      <div className='container w-100'>
        <div className='navbar-content'>
          <div className='brand-and-toggler d-flex align-items-center
          justify-content-between'>
            <Link to = "/" className="navbar-brand text-white
            text-uppercase no-wrap">Nexus <span>Games</span></Link>
            <button type="button" className="navbar-show-btn
            text-white" onClick={() => dispatch(setSidebarOn())}>
              <HiMenuAlt3 size={ 25 }/>
            </button>
          </div>

          <div className={`navbar-collapse ${sidebarStatus ? "show" : " "}`}>
            <button type="button" className="navbar-hide-btn" onClick={() => dispatch(setSidebarOff())}>
              <MdClose size={ 25 } />
            </button>

            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to = "/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to = "/library" className="nav-link">Library</Link>
              </li>
              <li className="nav-item">
                <Link to = "/stores" className="nav-link">Store</Link>
              </li>
              <li className="nav-item">
                <Link to = "/about us" className="nav-link">About Us</Link>
              </li>
            </ul>
            <SearchInput />

            <ul className="profile-place">
              <Link to = "/profile" className="profile-link">
              {currentUser ? (
                  <>
                    <ProfilePicture />
                    <img
                      src={currentUser.profilePicture || woman_avatar} // Используем изображение по умолчанию, если аватара нет
                      alt='profile'
                      className="profile-img"
                    />
                  </>
                ) : (
                  <img
                    src={woman_avatar} // Если пользователь не залогинен, отображаем серый кружок
                    alt="default profile"
                    className="profile-img"
                  />
                )}
              </Link>
            </ul>
          </div>
        </div>
      </div>
    </NavbarWrapper>
  )
}

export default Navbar;

const NavbarWrapper = styled.div`
  min-height: 78px;
  background: #090624;

  .navbar-brand{
    font-weight: 700;
    font-size: 32px;

    span{
      color: var(--clr-pink-normal);
    }
  }

  .nav-item{
    padding: 10px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.08);
  }

  .nav-link{
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    transition: var(--transition-default);

    &:hover{
      color: var(--clr-pink-normal);
    }
  }

  .profile-text{
    letter-spacing: 2px;
  }

  .profile-link{
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: 2px;
    transition: var(--transition-default);

    &:hover{
      color: var(--clr-pink-normal);
    }
  }

  .navbar-collapse{
    position: fixed;
    right: 0;
    top: 0;
    width: 280px;
    height: 100%;
    background-color: var(--clr-white);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    padding: 60px 20px 16px;
    text-align: center;
    transform: translateX(100%);
    transition: var(--transition-default);
    z-index: 999;

    &.show{
      transform: translateX(0);
    }
  }

  .navbar-hide-btn{
    position: absolute;
    top: 20px;
    right: 20px;
    transition: var(--transition-default);
    &:hover{
      transform: scale(1.2);
    }
  }

  .navbar-show-btn{
    transition: var(--transition-default);
    &:hover{
      transform: scale(1.2);
    }
  }

  .profile-img {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    object-cover: cover;
  }

  @media screen and (min-width: 992px){
    .navbar-show-btn{
      display: none;
    }
    .navbar-collapse{
      transform: translateX(0);
      position: relative;
      padding: 0;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      width: 100%;
      background-color: transparent;
      box-shadow: none;
    }
    .navbar-content{
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .nav-item{
      margin-left: 6px;
    }
    .navbar-nav{
      display: flex;
      padding: 0 150px;
      align-items: center;
    }
    .navbar-hide-btn{
      display: none;
    }
    .nav-link{
      color: var(--clr-white);
      padding: 1px 10px;
    }
    .profile-place{
      display: flex;
      margin-top: 0;
      color: var(--clr-white);
      margin-left: 40px;
      align-items: center;
      .profile-text{
        width: auto;
        margin-bottom: 0;
        margin-right: 22px;
      }
      .profile-link{
        color: var(--clr-white);
      }
    }
  }

  @media screen and (min-width: 1200px){
    .nav-link{
      padding-right: 16px;
      padding-left: 16px;
    }
    .profile-place{
      padding-right: 16px;
      padding-left: 16px;

      .profile-text{
        display: inline-block;
      }
    }
  }
`;