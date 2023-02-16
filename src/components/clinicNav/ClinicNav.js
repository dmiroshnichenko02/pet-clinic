import './clinicNav.scss';
import logotype from '../../resourses/img/header/logotype.svg'

const ClinicNav = () => {
    return (
        <nav className="navigation">
            <div className="container">
                <div className="navigation__wrapper">
                    <img src={logotype} alt="Aibolit Clinic" />
                    <ul className="navigation__menu">
                        <li className="navigation__menu_item">ЛИЧНЫЙ КАБИНЕТ</li>
                        <li className="navigation__menu_item">О НАС</li>
                        <li className="navigation__menu_item">НОВОСТИ И АКЦИИ</li>
                        <li className="navigation__menu_item">КОНТАКТЫ</li>
                        <li className="navigation__menu_item">БЛОГ</li>
                    </ul>
                    <div className="navigation__country">
                        <div className="navigation__country_item">ВОЛГОГРАД</div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default ClinicNav;