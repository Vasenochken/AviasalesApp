import React from 'react'
import classes from './app.module.scss'

const App = () => {
  return (
    <section className={classes.app}>
      <header className={classes.app__title}></header>
      <main className={classes.app__main}>
        <form className={classes.filter}>
          <p className={classes.filter__title}>количество пересадок</p>
          <ul className={classes.filter__list}>
            <li className={classes.filter__item}>
              <label className={classes.filter__label}>
                <input className={classes.filter__button} type="checkbox" />
                <span className={classes.filter__text}>Все</span>
              </label>
            </li>
            <li className={classes.filter__item}>
              <label className={classes.filter__label}>
                <input className={classes.filter__button} type="checkbox" />
                <span className={classes.filter__text}>Без пересадок</span>
              </label>
            </li>
            <li className={classes.filter__item}>
              <label className={classes.filter__label}>
                <input className={classes.filter__button} type="checkbox" />
                <span className={classes.filter__text}>1 пересадка</span>
              </label>
            </li>
            <li className={classes.filter__item}>
              <label className={classes.filter__label}>
                <input className={classes.filter__button} type="checkbox" />
                <span className={classes.filter__text}>2 пересадки</span>
              </label>
            </li>
            <li className={classes.filter__item}>
              <label className={classes.filter__label}>
                <input className={classes.filter__button} type="checkbox" />
                <span className={classes.filter__text}>3 пересадки</span>
              </label>
            </li>
          </ul>
        </form>
        <div className={classes.app_box}>
          <form className={classes.tabs}>
            <button className={classes.tabs__tab_cheap}>самый дешевый</button>
            <button className={classes.tabs__tab_fast}>самый быстрый</button>
            <button className={classes.tabs__tab_optimal}>оптимальный</button>
          </form>
          <ul className={classes.ticket_list}>
            <li className={classes.ticket}>
              <div className={classes.ticket__header}>
                <b className={classes.ticket__price}>13400</b>
              </div>
              <span className={classes.ticket__info}>
                <span className={classes.ticket__info__box_route}>
                  <p className={classes.ticket__info__title}>mow-hkt</p>
                  <p className={classes.ticket__info__description}>
                    10:45-08:00
                  </p>
                </span>
                <span className={classes.ticket__info__box_length}>
                  <p className={classes.ticket__info__title}>в пути</p>
                  <p className={classes.ticket__info__description}>10:45</p>
                </span>
                <span className={classes.ticket__info__box_stops}>
                  <p className={classes.ticket__info__title}>2 пересадки</p>
                  <p className={classes.ticket__info__description}>hkg,jnb</p>
                </span>
              </span>
              <span className={classes.ticket__info}>
                <span className={classes.ticket__info__box_route}>
                  <p className={classes.ticket__info__title}>mow-hkt</p>
                  <p className={classes.ticket__info__description}>
                    10:45-08:00
                  </p>
                </span>
                <span className={classes.ticket__info__box_length}>
                  <p className={classes.ticket__info__title}>в пути</p>
                  <p className={classes.ticket__info__description}>10:45</p>
                </span>
                <span className={classes.ticket__info__box_stops}>
                  <p className={classes.ticket__info__title}>2 пересадки</p>
                  <p className={classes.ticket__info__description}>hkg,jnb</p>
                </span>
              </span>
            </li>
            <li className={classes.ticket}>
              <div className={classes.ticket__header}>
                <b className={classes.ticket__price}>13400</b>
              </div>
              <span className={classes.ticket__info}>
                <span className={classes.ticket__info__box_route}>
                  <p className={classes.ticket__info__title}>mow-hkt</p>
                  <p className={classes.ticket__info__description}>
                    10:45-08:00
                  </p>
                </span>
                <span className={classes.ticket__info__box_length}>
                  <p className={classes.ticket__info__title}>в пути</p>
                  <p className={classes.ticket__info__description}>10:45</p>
                </span>
                <span className={classes.ticket__info__box_stops}>
                  <p className={classes.ticket__info__title}>2 пересадки</p>
                  <p className={classes.ticket__info__description}>hkg,jnb</p>
                </span>
              </span>
              <span className={classes.ticket__info}>
                <span className={classes.ticket__info__box_route}>
                  <p className={classes.ticket__info__title}>mow-hkt</p>
                  <p className={classes.ticket__info__description}>
                    10:45-08:00
                  </p>
                </span>
                <span className={classes.ticket__info__box_length}>
                  <p className={classes.ticket__info__title}>в пути</p>
                  <p className={classes.ticket__info__description}>10:45</p>
                </span>
                <span className={classes.ticket__info__box_stops}>
                  <p className={classes.ticket__info__title}>2 пересадки</p>
                  <p className={classes.ticket__info__description}>hkg,jnb</p>
                </span>
              </span>
            </li>
            <li className={classes.ticket}>
              <div className={classes.ticket__header}>
                <b className={classes.ticket__price}>13400</b>
              </div>
              <span className={classes.ticket__info}>
                <span className={classes.ticket__info__box_route}>
                  <p className={classes.ticket__info__title}>mow-hkt</p>
                  <p className={classes.ticket__info__description}>
                    10:45-08:00
                  </p>
                </span>
                <span className={classes.ticket__info__box_length}>
                  <p className={classes.ticket__info__title}>в пути</p>
                  <p className={classes.ticket__info__description}>10:45</p>
                </span>
                <span className={classes.ticket__info__box_stops}>
                  <p className={classes.ticket__info__title}>2 пересадки</p>
                  <p className={classes.ticket__info__description}>hkg,jnb</p>
                </span>
              </span>
              <span className={classes.ticket__info}>
                <span className={classes.ticket__info__box_route}>
                  <p className={classes.ticket__info__title}>mow-hkt</p>
                  <p className={classes.ticket__info__description}>
                    10:45-08:00
                  </p>
                </span>
                <span className={classes.ticket__info__box_length}>
                  <p className={classes.ticket__info__title}>в пути</p>
                  <p className={classes.ticket__info__description}>10:45</p>
                </span>
                <span className={classes.ticket__info__box_stops}>
                  <p className={classes.ticket__info__title}>2 пересадки</p>
                  <p className={classes.ticket__info__description}>hkg,jnb</p>
                </span>
              </span>
            </li>
            <li className={classes.ticket}>
              <div className={classes.ticket__header}>
                <b className={classes.ticket__price}>13400</b>
              </div>
              <span className={classes.ticket__info}>
                <span className={classes.ticket__info__box_route}>
                  <p className={classes.ticket__info__title}>mow-hkt</p>
                  <p className={classes.ticket__info__description}>
                    10:45-08:00
                  </p>
                </span>
                <span className={classes.ticket__info__box_length}>
                  <p className={classes.ticket__info__title}>в пути</p>
                  <p className={classes.ticket__info__description}>10:45</p>
                </span>
                <span className={classes.ticket__info__box_stops}>
                  <p className={classes.ticket__info__title}>2 пересадки</p>
                  <p className={classes.ticket__info__description}>hkg,jnb</p>
                </span>
              </span>
              <span className={classes.ticket__info}>
                <span className={classes.ticket__info__box_route}>
                  <p className={classes.ticket__info__title}>mow-hkt</p>
                  <p className={classes.ticket__info__description}>
                    10:45-08:00
                  </p>
                </span>
                <span className={classes.ticket__info__box_length}>
                  <p className={classes.ticket__info__title}>в пути</p>
                  <p className={classes.ticket__info__description}>10:45</p>
                </span>
                <span className={classes.ticket__info__box_stops}>
                  <p className={classes.ticket__info__title}>2 пересадки</p>
                  <p className={classes.ticket__info__description}>hkg,jnb</p>
                </span>
              </span>
            </li>
            <li className={classes.ticket}>
              <div className={classes.ticket__header}>
                <b className={classes.ticket__price}>13400</b>
              </div>
              <span className={classes.ticket__info}>
                <span className={classes.ticket__info__box_route}>
                  <p className={classes.ticket__info__title}>mow-hkt</p>
                  <p className={classes.ticket__info__description}>
                    10:45-08:00
                  </p>
                </span>
                <span className={classes.ticket__info__box_length}>
                  <p className={classes.ticket__info__title}>в пути</p>
                  <p className={classes.ticket__info__description}>10:45</p>
                </span>
                <span className={classes.ticket__info__box_stops}>
                  <p className={classes.ticket__info__title}>2 пересадки</p>
                  <p className={classes.ticket__info__description}>hkg,jnb</p>
                </span>
              </span>
              <span className={classes.ticket__info}>
                <span className={classes.ticket__info__box_route}>
                  <p className={classes.ticket__info__title}>mow-hkt</p>
                  <p className={classes.ticket__info__description}>
                    10:45-08:00
                  </p>
                </span>
                <span className={classes.ticket__info__box_length}>
                  <p className={classes.ticket__info__title}>в пути</p>
                  <p className={classes.ticket__info__description}>10:45</p>
                </span>
                <span className={classes.ticket__info__box_stops}>
                  <p className={classes.ticket__info__title}>2 пересадки</p>
                  <p className={classes.ticket__info__description}>hkg,jnb</p>
                </span>
              </span>
            </li>
          </ul>
          <button className={classes.button_view}>
            показать ещё 5 билетов
          </button>
        </div>
      </main>
    </section>
  )
}

export default App
