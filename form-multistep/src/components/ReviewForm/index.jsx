import React from "react";
import {
    BsFillEmojiFrownFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiSmileFill,
    BsFillEmojiHeartEyesFill,
} from "react-icons/bs"
import './style.css'

const ReviewForm = () => {
    return (
        <article className="review-form">
            <section className="form-control score-container">
                <label className="radio-container">
                    <input type="radio" value="unsatisfied" name ="value" required/>
                    <BsFillEmojiFrownFill/>
                    <p>Insatisfeito</p>
                </label>

                <label className="radio-container">
                    <input type="radio" value="unsatisfied" name ="value" required/>
                    <BsFillEmojiNeutralFill/>
                    <p>Poderia ser melhor</p>
                </label>

                <label className="radio-container">
                    <input type="radio" value="unsatisfied" name ="value" required/>
                    <BsFillEmojiSmileFill/>
                    <p>Satisfeito</p>
                </label>

                <label className="radio-container">
                    <input type="radio" value="unsatisfied" name ="value" required/>
                    <BsFillEmojiHeartEyesFill/>
                    <p>Muito satisfeito</p>
                </label>
            </section>

            <section className="form-control">
                <label htmlFor="comment">Comentário:</label>
                <textarea
                    name="comment"
                    id="comment"
                    placeholder="Conte como foi seu experiência..."
                    maxLength={320}
                    required>
                </textarea>
            </section>
        </article>
    )
}

export { ReviewForm }