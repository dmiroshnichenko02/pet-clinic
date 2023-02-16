import { useEffect, useState } from "react"

import ProfecionalCards from '../../services/ProfesionalCards'

import './clinicProfesional.scss';


const ClinicProfesional = () => {

    const [cards, setCards] = useState(null)

    useEffect(() => {
        const cardsData = ProfecionalCards()
        setCards(cardsData.data)
    }, [])

    console.log(cards);

    return (
        <div className="profesional">
            <div className="container">
                <div className="profesional__wrapper">
                    {cards ? cards.map(item => {
                        const { id, title, icon, services } = item;
                        return (
                            <div className="profesional__card" key={id}>
                                <div className="profesional__card__title">{title}</div>
                                <div className="profesional__card__services">{services} услуг</div>
                                <img src={icon} alt={title} className="profesional__card__img"/>
                            </div>
                        )
                    }) : null}
                </div>
            </div>
        </div>
    )
}

export default ClinicProfesional;