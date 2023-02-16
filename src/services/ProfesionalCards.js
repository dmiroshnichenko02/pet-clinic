import cardio from '../resourses/img/profesional_icons/cardio.svg'
import dentistry from '../resourses/img/profesional_icons/dentistry.svg'
import dermatologist from '../resourses/img/profesional_icons/dermatologist.svg'
import endocr from '../resourses/img/profesional_icons/endocr.svg'
import exotic from '../resourses/img/profesional_icons/exotic.svg'
import grooming from '../resourses/img/profesional_icons/grooming.svg'
import laboratory from '../resourses/img/profesional_icons/laboratory.svg'
import neurology from '../resourses/img/profesional_icons/neurology.svg'
import oncology from '../resourses/img/profesional_icons/oncology.svg'
import ophthalmology from '../resourses/img/profesional_icons/ophthalmology.svg'
import orthopedics from '../resourses/img/profesional_icons/orthopedics.svg'
import pharmacy from '../resourses/img/profesional_icons/pharmacy.svg'
import reproduction from '../resourses/img/profesional_icons/reproduction.svg'
import surgeon from '../resourses/img/profesional_icons/surgeon.svg'
import terapy from '../resourses/img/profesional_icons/terapy.svg'
import visual from '../resourses/img/profesional_icons/visual.svg'


function ProfesionalCards() {
    const data = [
        {
            id: 1,
            icon: terapy,
            title: 'Терапия',
            services: 26
        },
        {
            id: 2,
            icon: surgeon,
            title: 'Хирургия',
            services: 26
        },
        {
            id: 3,
            icon: neurology,
            title: 'Неврология',
            services: 26
        },
        {
            id: 4,
            icon: orthopedics,
            title: 'Ортопедия',
            services: 26
        },
        {
            id: 5,
            icon: dermatologist,
            title: 'Дерматология',
            services: 26
        },
        {
            id: 6,
            icon: ophthalmology,
            title: 'Офтальмология',
            services: 26
        },
        {
            id: 7,
            icon: cardio,
            title: 'Кардиология',
            services: 26
        },
        {
            id: 8,
            icon: dentistry,
            title: 'Стоматология',
            services: 26
        },
        {
            id: 9,
            icon: reproduction,
            title: 'Репродуктология',
            services: 26
        },
        {
            id: 10,
            icon: visual,
            title: 'Визуальная диагностика',
            services: 26
        },
        {
            id: 11,
            icon: laboratory,
            title: 'Лаборатория',
            services: 26
        },
        {
            id: 12,
            icon: oncology,
            title: 'Онкология',
            services: 26
        },
        {
            id: 13,
            icon: endocr,
            title: 'Эндокринология',
            services: 26
        },
        {
            id: 14,
            icon: exotic,
            title: 'Экзотические животные',
            services: 26
        },
        {
            id: 15,
            icon: pharmacy,
            title: 'Аптека',
            services: 26
        },
        {
            id: 16,
            icon: grooming,
            title: 'Груминг',
            services: 26
        },
    ]

    return {data}
}


export default ProfesionalCards;