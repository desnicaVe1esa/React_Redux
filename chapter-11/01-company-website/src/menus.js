import HomeIcon from 'react-icons/lib/fa/home'
import { NavLink } from 'react-router-dom' /*
                                              NavLink - используется для создания ссылок, которые в случае активности
                                              могут получать особое стилевое оформление
                                            */
import './stylesheets/menus.scss'

const selectedStyle = {
    backgroundColor: "white",
    color: "slategray"
}
/*
   MainMenu(PageTemplate) - многократно используемый компонент, который можно зайдействовать в качестве шаблона
   для внутренних cтраниц. Он всегда отбражает главное меню. По мере переходов пользователей по сайту станет выводить
   на экран вложенное содержимое
*/
export const MainMenu = () =>
    <nav className="main-menu">
        <NavLink to="/"><HomeIcon/></NavLink>
        <NavLink to="/about" activeStyle={selectedStyle}>[About]</NavLink>
        <NavLink to="/events" activeStyle={selectedStyle}>[Events]</NavLink>
        <NavLink to="/products" activeStyle={selectedStyle}>[Products]</NavLink>
        <NavLink to="/contact" activeStyle={selectedStyle}>[Contact Us]</NavLink>
    </nav>

// Направление пользователь на внутреннее содержимое
export const AboutMenu = ({ match }) => // match - свойство маршрутиризации
    <div className="about-menu">
        <li>
            <NavLink to="/about"
                  style={match.isExact && selectedStyle}> {/* match.isExact === true, когда местоположение соответсвует
                                                              маршруту /about, false - /about/service
                                                            */}
                [Company]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/history"
                  activeStyle={selectedStyle}>
                [History]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/services"
                  activeStyle={selectedStyle}>
                [Services]
            </NavLink>
        </li>
        <li>
            <NavLink to="/about/location"
                  activeStyle={selectedStyle}>
                [Location]
            </NavLink>
        </li>
    </div>
