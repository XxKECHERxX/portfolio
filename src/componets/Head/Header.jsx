import headBanner from '../images/head-banner.jpg'
import HtmlIcon from '../icons/HtmlIcon'
import CssIcon from '../icons/CssIcon'
import SassIcon from '../icons/SassIcon'
import ReactIcon from '../icons/ReactIcon'
import ReduxIcon from '../icons/ReduxIcon'
import FigmaIcon from '../icons/FigmaIcon'
import VScodeIcon from '../icons/VScodeIcon'
import LikedinIcon from '../icons/LinkedinIcon'
import GitIcon from '../icons/GitIcon'
import TelegramIcon from '../icons/TelegramIcon'

const Header = () => {
  const logosLang = [
    { id: 1, logo: <HtmlIcon /> },
    { id: 2, logo: <CssIcon /> },
    { id: 3, logo: <SassIcon /> },
    { id: 4, logo: <ReactIcon /> },
    { id: 5, logo: <ReduxIcon /> },
    { id: 6, logo: <FigmaIcon /> },
    { id: 7, logo: <VScodeIcon /> },
  ]

  return (
    <header>
      <div className="container">
        <div className="logos">
          {logosLang.map((el) => {
            return (
              <div className="logos__icon" key={el.id}>
                {el.logo}
              </div>
            )
          })}
        </div>
        <div className="banner">
          <img
            src={headBanner}
            className="banner__back-picture"
            alt="banner header"
          />
          <div className="banner__signboard">
            <div>Анатолий Жлудов</div>
            {/* <br /> */}
            <div>Frontend-разработчик</div>
            <div className="banner__signboard-links">
              <a
                href="https://www.linkedin.com/in/anatolii-zhludov"
                style={{ border: 'none' }}
              >
                <LikedinIcon />
              </a>
              <a
                href="https://github.com/XxKECHERxX"
                style={{ border: 'none' }}
              >
                <GitIcon />
              </a>
              <a href="https://t.me/zhludov_a" style={{ border: 'none' }}>
                <TelegramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
