'use client'
import styles from "./styles.module.css"
import { Question } from "@/components/Question/Question"
import { qAndA } from "@/common/constants"

export default function QuestionsPage() {
    return (
        <div className={styles.qAndASection}>
            <h1 className={styles.questionsHeader}>Вопросы-ответы</h1>
            {
                qAndA.map((element, index) => <Question key={index} question={element.question} answer={element.answer}/>)
            }
        </div>
    )
}
