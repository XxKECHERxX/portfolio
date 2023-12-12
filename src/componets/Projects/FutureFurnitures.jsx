import futFurnitures from '../images/ff-laptop.jpg'
import triangle from '../images/triangle.jpg'
import backPicFF from '../images/ff-back-description.jpg'

const AllGym = () => {
  return (
    <section>
      <div className="projects">
        <div className="description">
          <div className="description__background">
            <img src={backPicFF} alt="Black hole" />
          </div>
          <div className="description__about">
            <h3>
              Проект <br />
              Future & furnitures
            </h3>
            <p>Адаптивный интернет-магазин дизайнерской мебели.</p>
            <p>
              Технологии: <br /> HTML, CSS Modules, JS, React, React Router,
              Redux Toolkit
            </p>
            <p>
              Сайт <br />{' '}
              <a href="xxkecherxx.github.io/future-furnitures/">
                github.io/future-furnitures
              </a>
            </p>
            <p>
              Проект в GitHub <br />{' '}
              <a href="https://github.com/XxKECHERxX/future-furnitures">
                github.com/XxKECHERxX/future-furnitures
              </a>
            </p>
          </div>
        </div>
        <div className="showcase">
          <div className="showcase__gradient" />
          <div className="showcase__website">
            <img src={futFurnitures} alt="AllGym" />
          </div>
          <div className="showcase__back-circle showcase__back-circle_spin-right">
            <img src={triangle} alt="Rotate circle" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AllGym
