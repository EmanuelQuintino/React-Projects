import React from "react";
import {
    BsFillEmojiFrownFill,
    BsFillEmojiNeutralFill,
    BsFillEmojiSmileFill,
    BsFillEmojiHeartEyesFill,
} from "react-icons/bs"
import './style.css'

const ReviewForm = ({ data, updateFieldHandler }) => {
    return (
        <article className="review-form">
            <section className="form-control score-container">
                <label className="radio-container">
                    <input
                        type="radio"
                        value="unsatisfied"
                        name ="value"
                        required
                        checked={data.review == "unsatisfied"}
                        onChange={(e) => updateFieldHandler('review', e.target.value)}
                    />
                    <BsFillEmojiFrownFill/>
                    <p>Insatisfeito</p>
                </label>

                <label className="radio-container">
                    <input
                        type="radio"
                        value="neutral"
                        name ="value"
                        required
                        checked={data.review == "neutral"}
                        onChange={(e) => updateFieldHandler('review', e.target.value)}
                    />
                    <BsFillEmojiNeutralFill/>
                    <p>Poderia ser melhor</p>
                </label>

                <label className="radio-container">
                    <input
                        type="radio"
                        value="satisfied"
                        name ="value"
                        required
                        checked={data.review == "satisfied"}
                        onChange={(e) => updateFieldHandler('review', e.target.value)}
                    />
                    <BsFillEmojiSmileFill/>
                    <p>Satisfeito</p>
                </label>

                <label className="radio-container">
                    <input
                        type="radio"
                        value="very_satisfied"
                        name ="value"
                        required
                        checked={data.review == "very_satisfied"}
                        onChange={(e) => updateFieldHandler('review', e.target.value)}
                    />
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
                    required
                    value={data.comment || ""}
                    onChange={(e) => updateFieldHandler('comment', e.target.value)}
                    >
                </textarea>
            </section>
        </article>
    )
}

export { ReviewForm }