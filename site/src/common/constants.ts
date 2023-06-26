export const API_URL = 'http://localhost:3001/api/'

export const genres = {
    fantasy:'Фэнтези',
    horror:'Ужасы',
    action:'Боевик',
    comedy:'Комедия',
} as const

export const genresForFilter = [
    {
        name : 'Фэнтези',
        id: 'fantasy'
    },
    {
        name : 'Ужасы',
        id: 'horror'
    },
    {
        name : 'Боевик',
        id: 'action'
    },
    {
        name : 'Комедия',
        id: 'comedy'
    },
] as const

export const qAndA = [
    {
        question:'Что такое Билетопоиск?',
        answer:'Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.'
    },
    {
        question:'Какой компании принадлежит Билетопоиск?',
        answer:'Сайт открыт в 2003 году. Владельцем проекта до октября 2013 года являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её совладельцу — французской компании Алоцин. 15 октября 2013 года сервис приобрела другая компания.'
    },
    {
        question:'Как купить билет на Билетопоиск?',
        answer:'Вы можете купить билет в кино прямо на Кинопоиске и оплатить его банковской картой. После покупки на вашу электронную почту придет письмо с номером заказа. Получите билет в кассе без очереди по этому номеру или распечатайте его через билетный терминал.'
    },
    {
        question:'Как оставить отзыв на Билетопоиск?',
        answer:'Оставить отзыв можно только после авторизации на сервисе. Вы можете оставить отзыв.\nВ профиле исполнителя на странице сервиса — в блоке Вы сотрудничали с этим специалистом?\nНа главной странице сервиса на вкладке Мои заказы — если вы нашли исполнителя с помощью опубликованного заказа. Чтобы отправить отзыв, поставьте оценку специалисту и в комментарии напишите, насколько вы довольны результатом услуги.'
    },
]
