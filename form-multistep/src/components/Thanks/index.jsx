import React from "react";
import {
    BsFillEmojiFrownFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiSmileFill,
    BsFillEmojiHeartEyesFill,
} from "react-icons/bs"
import './style.css'

const emojiData = {
    unsatisfied: <BsFillEmojiFrownFill/>,
    neutral: <BsFillEmojiNeutralFill/>,
    satisfied: <BsFillEmojiSmileFill/>,
    very_satisfied: <BsFillEmojiHeartEyesFill/>,
}

const Thanks = ({ data }) => {
    return (
        <article className="thanks-container">
            <section>
                <h2>Falta pouco...</h2>
                <p>
                    Sua opinião é muito importante, em breve receberá um cupom com 10% de desconto.
                </p>
                <p>
                    Para concluir avaliação clique no botão enviar.
                </p>
            </section>
            <section>
                <h3>Resumo da avaliação {data.name}</h3>
                <p className="review-data">
                    <span>Satisfação com o produto:</span>
                    {emojiData[data.review]}
                </p>
                <p className="review-data">
                    <span>Satisfação com o produto:</span>
                    {data.comment}
                </p>
            </section>
        </article>
    )
}

export { Thanks }