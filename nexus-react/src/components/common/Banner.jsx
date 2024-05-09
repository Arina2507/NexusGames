import styled from 'styled-components';
import { banner_image2 } from '../../utils/images';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <BannerWrapper className='d-flex align-items-center justify-content-start' style=
    {{
      background: `linear-gradient(0deg, rgba(0, 0, 0, 0.32), rgba(0, 0, 0, 0.32)),
      linear-gradient(248.75deg, rgba(0, 159, 157, 0.41) 0%, rgba(15, 10, 60, 0.41)
      38.46%), url(${banner_image2}) center/cover no-repeat`
    }}>
      <div className='banner-content w-100 container text-white'>
        <div className='banner-title1 text-uppercase'>Welcome To The</div>
        <h1 className='banner-title2 text-uppercase'>Nexus GamesWebsite</h1>
        <p className='lead-text'>Best games for the best gamers.</p>
        <button type='button' className='banner-btn d-flex align-items-center'>
          <Link to="/Login"><span className='btn-text text-white'>Login</span></Link>
        </button>
      </div>
    </BannerWrapper>
  )
}

export default Banner;

const BannerWrapper = styled.div`
    min-height: 768px;

    .banner-title1{
      font-family: var(--font-family-right);
      font-size: 35px;
      font-weight: 400;
      letter-spacing: 0.09em;
      line-height: 1.2;
      max-width: 600px;
    }

    .banner-title2{
      font-family: var(--font-family-right);
      font-size: 48px;
      font-weight: 400;
      letter-spacing: 0.09em;
      line-height: 1.2;
      max-width: 600px;
      margin-bottom: 40px;
    }

    .lead-text{
      max-width: 600px;
    }
    .banner-btn{
      min-width: 140px;
      height: 45px;
      padding: 13px 16px;
      font-size: 20px;
      font-weight: 700;
      background-color: var(--clr-pink-normal);
      color: var(--clr-white);
      text-transform: uppercase;
      margin-top: 33px;
      

      &:hover{
        background-color: var(--clr-green-normal);
        .btn-text{
          color: var(--clr-white);
        }
      }
    }

    @media screen and (min-width: 992px){
      .banner-badge{
        font-size: 26px;
      }

      .banner-title2{
        font-size: 56px;
      }
    }
`;