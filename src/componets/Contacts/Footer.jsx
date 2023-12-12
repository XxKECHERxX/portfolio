import footerBanner from '../images/footer-banner.jpg'

const Footer = () => {
  return (
    <footer id='contacts'>
      <div className="container">
        <img src={footerBanner} alt="footer banner" />
        <div className="contacts">
          <div className="contacts__links">
            <p>
              Likendin <br />{' '}
              <a href="www.linkedin.com/in/anatolii-zhludov">
                linkedin.com/anatolii-zhludov
              </a>
            </p>
            <p>
              Github <br />{' '}
              <a href="https://github.com/XxKECHERxX">github.com/XxKECHERxX</a>
            </p>
            <p>
              Telegram <br /> <a href="https://t.me/xKECHERx">t.me/xKECHERx</a>
            </p>
            <p>
              Почта <br /> zhludovanatolii@gmail.com
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
