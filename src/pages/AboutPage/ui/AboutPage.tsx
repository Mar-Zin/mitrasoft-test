import photo from '../../../shared/assets/icons/avatar.jpg'
import telegram from '../../../shared/assets/icons/telegram.jpeg'
import vk from '../../../shared/assets/icons/vk.png'
import github from '../../../shared/assets/icons/github.png'
import './AboutPage.css'

const AboutPage = () => {

    return (
        <div className='about'>
            <div className="about-container">
                <div className="info">
                    <img src={photo} alt="avatar" className="avatar" />
                    <div className="info-text">
                        <div className="info-text__item">
                            <p>Имя, фамилия: <strong>Марат Зиннатуллин</strong></p>
                        </div>
                        <div className="info-text__item">
                            <p>Возраст: <strong>28 лет</strong></p>
                        </div>
                        <div className="info-text__item">
                            <p>Город: <strong>Казань</strong></p>
                        </div>
                        <div className="info-text__item">
                            <p>E-mail: <strong>marat.zin@mail.ru</strong></p>
                        </div>
                        <div className="info-text__item">
                            <p>Телефон: <strong>+7(950)947-56-58</strong></p>
                        </div>
                    </div>
                </div>
                <div className="about-card bg-yellow">
                    <h2>Навыки</h2>
                    <div className='skills'>
                        <a href="https://getbootstrap.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg" alt="bootstrap" width="40" height="40"/></a>
                        <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/></a>
                        <a href="https://www.docker.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="docker" width="40" height="40"/> </a>
                        <a href="https://expressjs.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="express" width="40" height="40"/> </a>
                        <a href="https://firebase.google.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" alt="firebase" width="40" height="40"/></a> 
                        <a href="https://git-scm.com/" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg" alt="git" width="40" height="40"/> </a>
                        <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a>
                        <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/></a>
                        <a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="mongodb" width="40" height="40"/></a>
                        <a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a>
                        <a href="https://reactjs.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg" alt="react" width="40" height="40"/> </a>
                        <a href="https://redux.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/redux/redux-original.svg" alt="redux" width="40" height="40"/> </a> 
                        <a href="https://sass-lang.com" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/sass/sass-original.svg" alt="sass" width="40" height="40"/> </a>
                        <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a>
                        <a href="https://webpack.js.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/d00d0969292a6569d45b06d3f350f463a0107b0d/icons/webpack/webpack-original-wordmark.svg" alt="webpack" width="40" height="40"/></a> 
                    </div>
                </div>
                <div className="about-card bg-green">
                    <h2>Опыт работы</h2>
                    <ul className="list">
                        <li>КУРС "ПРОДВИНУТЫЙ FRONTEND. В PRODUCTION НА REACT" ОТ <a href="https://www.youtube.com/@UlbiTV" target="_blank" rel="noreferrer">ULBI TV</a></li>
                            <p>01.2023 - 06.2023 (В процессе)</p>

                        <li><a href="https://alfa-campus.ru/" target="_blank" rel="noreferrer">ALFA CAMPUS</a></li>
                            <p>11.2022 - 03.2023</p>
                            <p>
                                ‒ Alfa Campus — это образовательные курсы от Альфа-Банка.
                                <br/>       
                                ‒ В процессе обучения разработан интернет-магазин.
                                <br/>
                                ‒ Репозиторий : https://www.gitlab-alfa-campus.ru/Mar-Zin/a-store-withouteject
                            </p>

                        <li><a href="https://result.school/" target="_blank" rel="noreferrer">RESULT SCHOOL (Курс Junior Frontend Developer.)</a></li>
                            <p>11.2021 - 10.2022</p>
                            <p>
                                ‒ За время обучения я выполнил следующий дипломный проект:
                                <br/>
                                ‒ SPA приложение с клиент-серверной архитектурой. Репозиторий: https://github.com/Mar-Zin/main-project
                                <br/>
                                ‒ Разработал Авторизацию/Регистрацию, JWT. - Корзина. - Страница с товарами (Поиск, Сортировка, Фильтрация, Пагинация).
                                <br/>
                                ‒ Личный кабинет пользователя с возможностью редактирования.- Страница товара (Возможность оставить отзыв).
                                <br/>
                                ‒ Страница с избранными товарами. - Панель администратора (Таблица товаров, добавление, удаление, редактирование товара)
                                <br/>
                                ‒ Стек: React, Typescript, Redux, Redux Toolkit, SCSS, NodeJS, Express, MongoDB, Docker
                            </p>
                    </ul>
                </div>
                <div className="about-card bg-sea">
                    <h2>Контакты</h2>
                    <div className="icons">
                        <a href="https://t.me/marzin10" target="_blank" rel="noreferrer"><img src={telegram} alt="Телеграм" className="telegram"/></a>
                        <a href="https://vk.com/h0phey" target="_blank" rel="noreferrer"><img src={vk} alt="Вконтакте" className="vk"/></a>
                        <a href="https://github.com/Mar-Zin" target="_blank" rel="noreferrer"><img src={github} alt="GitHub" className="github"/></a>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default AboutPage;
