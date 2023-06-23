'use client';
import { FunctionComponent, useState } from "react"
import styles from "./styles.module.css"
import Image from "next/image"

interface QandA {
    question: string,
    answer: string,
}

export const Question: FunctionComponent<QandA> = ({question, answer}) => {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div onClick={()=>setIsOpen(!isOpen)} className={styles.questionAndAnswer}>
            <div>
                <h2 className={styles.question}>{question}</h2>
                { isOpen && <p className={styles.answer}>{answer}</p> }
            </div>
            <Image className={isOpen ? styles.buttonUp : ""} rel="icon" src="/icons/open-black.svg" alt="open" width={29} height={29}/>
        </div>
    )
}