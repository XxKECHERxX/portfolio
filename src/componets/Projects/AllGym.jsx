import allGym from '../images/allgym-laptop.jpg'
import circle from '../images/circle.jpg'
import backPicAllGym from '../images/allgym-back-description.jpg'

const AllGym = () => {
  return (
    <section id="project">
      <div className="projects">
        <div className="showcase">
          <div className="showcase__gradient" />
          <div className="showcase__website">
            <img src={allGym} alt="AllGym" />
          </div>
          <div className="showcase__back-circle showcase__back-circle_spin-left">
            <img src={circle} alt="Rotate circle" />
          </div>
        </div>
        <div className="description">
          <div className="description__background">
            <img src={backPicAllGym} alt="Black hole" />
          </div>
          <div className="description__about">
            <h3>Проект AllGym</h3>
            <p>
              Адаптивный сайт тренажерного зала. Реализована идея бесконечного
              слайдера и анимация при скролле страницы.
            </p>
            <p>
              Технологии: <br /> HTML, CSS Modules, JS, React
            </p>
            <p>
              Сайт <br />{' '}
              <a href="https://xxkecherxx.github.io/allgym/">
                github.io/allgym
              </a>
            </p>
            <p>
              Проект в GitHub <br />{' '}
              <a href="https://github.com/XxKECHERxX/allgym">
                github.com/XxKECHERxX/allgym
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllGym
