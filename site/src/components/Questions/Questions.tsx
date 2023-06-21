'use client';
import { FunctionComponent, useState } from "react"
import styles from "./styles.module.css"

export const Questions: FunctionComponent = () => {

    const [isOpen, setIsOpen] = useState(false);

    function handleClick() {
        setIsOpen(!isOpen)
    }

    return (
        <div className={styles.questions}>
            <h1 className={styles.questionsHeader}>Вопросы-ответы</h1>
            <div onClick={handleClick} className={styles.questionAndAnswer}>
                <div>
                    <h2 className={styles.question}>Что такое Билетопоиск?</h2>
                    <p className={isOpen ? styles.answerIsOpen : styles.answerClosed}>Мы — крупнейший сервис о кино в рунете. На нем вы сможете посмотреть фильмы и сериалы, купить билеты в кино, узнать рейтинги популярных видео и интересные факты, поставить фильмам оценки, написать рецензии и дополнить описание фильмов.</p>
                </div>
                <img className={isOpen ? styles.buttonUp : styles.buttonDown} rel="icon" src="icons/open.svg" sizes="29x29" />
            </div>
            {/* <div  className={styles.questionAndAnswer}>
                <div>
                    <h2 className={styles.question}>Какой компании принадлежит Билетопоиск?</h2>
                    <br />
                    <p>Сайт открыт в 2003 году. Владельцем проекта до октября 2013 года являлась компания ООО «Билетопоиск», которой принадлежало 60 % акций проекта, 40 % акций принадлежало её совладельцу — французской компании Алоцин. 15 октября 2013 года сервис приобрела другая компания. </p>
                </div>
                <img className={styles.button} rel="icon" src="icons/open.svg" sizes="29x29" />
            </div>
            <div  className={styles.questionAndAnswer}>
                <div>
                    <h2 className={styles.question}>Как купить билет на Билетопоиск?</h2>
                    <br />
                    <p>Вы можете купить билет в кино прямо на Кинопоиске и оплатить его банковской картой. После покупки на вашу электронную почту придет письмо с номером заказа. Получите билет в кассе без очереди по этому номеру или распечатайте его через билетный терминал.</p>
                </div>
                <img className={styles.button} rel="icon" src="icons/open.svg" sizes="29x29" />
            </div>
            <div  className={styles.questionAndAnswer}>
                <div>
                    <h2 className={styles.question}>Как оставить отзыв на Билетопоиск?</h2>
                    <br />
                    <p>Оставить отзыв можно только после авторизации на сервисе. Вы можете оставить отзыв.</p>
                    <br />
                    <p>В профиле исполнителя на странице сервиса — в блоке Вы сотрудничали с этим специалистом?</p>
                    <br />
                    <p>На главной странице сервиса на вкладке Мои заказы — если вы нашли исполнителя с помощью опубликованного заказа. Чтобы отправить отзыв, поставьте оценку специалисту и в комментарии напишите, насколько вы довольны результатом услуги.</p>
                </div>
                <img className={styles.button} rel="icon" src="icons/open.svg" sizes="29x29" />
            </div> */}
        </div>
    )
}