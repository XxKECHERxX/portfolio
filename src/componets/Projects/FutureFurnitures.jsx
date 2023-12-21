import futFurnitures from '../images/ff-laptop.jpg'
import triangle from '../images/triangle.jpg'
import backPicFF from '../images/ff-back-description.jpg'
import { useEffect, useState } from 'react'

const FutureFurnitures = () => {
  const [animEffect, setAnimEffect] = useState('')

  const handleAnimSpin = () => {
    if (window.scrollY > 800) {
      setAnimEffect('_spin-scale')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleAnimSpin)

    return () => window.removeEventListener('scroll', handleAnimSpin)
  }, [])

  return (
    <section>
      <div className="projects projects_reverse">
        <div className="showcase">
          <div
            className={`${'showcase__gradient'} + ${`showcase__gradient${animEffect}`}`}
          />
          <div
            className={`${'showcase__website'} + ${`showcase__website${animEffect}`}`}
          >
            <img src={futFurnitures} alt="FutureFurnitures" />
          </div>
          <div className="showcase__back-circle showcase__back-circle_spin-left">
            <img src={triangle} alt="Rotate circle" />
          </div>
        </div>
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
              <a href="https://xxkecherxx.github.io/future-furnitures/">
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
      </div>
    </section>
  )
}

export default FutureFurnitures
