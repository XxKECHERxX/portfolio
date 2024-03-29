import yourPlan from '../images/yourplan-laptop.jpg'
import squar from '../images/squar.jpg'
import backPicYourPlan from '../images/yourplan-back-description.jpg'
import { useEffect, useState } from 'react'

const YourPlan = () => {
  const [animEffect, setAnimEffect] = useState('')

  const handleAnimSpin = () => {
    if (window.scrollY > 1300) {
      setAnimEffect('_spin-scale')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleAnimSpin)

    return () => window.removeEventListener('scroll', handleAnimSpin)
  }, [])

  return (
    <section>
      <div className="projects">
        <div className="showcase">
          <div
            className={`${'showcase__gradient'} + ${`showcase__gradient${animEffect}`}`}
          />
          <div
            className={`${'showcase__website'} + ${`showcase__website${animEffect}`}`}
          >
            <img src={yourPlan} alt="YourPlan" />
          </div>
          <div className="showcase__back-circle showcase__back-circle_spin-left">
            <img src={squar} alt="Rotate circle" />
          </div>
        </div>
        <div className="description">
          <div className="description__background">
            <img src={backPicYourPlan} alt="Black hole" />
          </div>
          <div className="description__about">
            <h3>Проект YourPlan</h3>
            <p>
              Планировщик с авторизацией для сохранения созданого списка дел и
              настройками окон приложения.
            </p>
            <p>
              Технологии: <br /> HTML, CSS Modules, JS, React, Redux Toolkit,
              Firebase Authentication, Firestore Database
            </p>
            <p>
              Сайт <br />{' '}
              <a href="https://xxkecherxx.github.io/yourplan/">
                github.io/yourplan
              </a>
            </p>
            <p>
              Проект в GitHub <br />{' '}
              <a href="https://github.com/XxKECHERxX/yourplan">
                github.com/XxKECHERxX/yourplan
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YourPlan
