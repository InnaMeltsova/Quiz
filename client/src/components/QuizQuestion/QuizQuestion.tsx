import './QuizQuestion.css';
import {useState} from "react";

type Option = {
    content: string,
    isCorrect: boolean,
    id: number,
};

type Question = {
    question: string,
    options: Option[],
    id: number
};

type QuizQuestionProps = {
    question: Question;
    onAnswer: (selectedIdx: number) => void;
};

const QuizQuestion = ({ question, onAnswer }: QuizQuestionProps) => {
    const [selected, setSelected] = useState<number | null>(null);

    const handleClick = (selectedIdx: number) => {
        if(selected === null) {
            setSelected(selectedIdx);
        }
        onAnswer(selectedIdx);
    }

    return (
        <div className="question-page">
            <h2>{question?.question}</h2>
            {question?.options.map((option, idx) => {
                let className = 'option-btn';
                if(selected !== null) {
                    if(option.isCorrect) {
                        className = 'correct-option';
                    } else if( idx === selected) {
                        className = 'wrong-option';
                    }
                }
                return (
                    <button
                        className={className}
                        key={idx}
                        onClick={() => handleClick(idx)}
                        disabled={selected !== null}
                    >
                        {option.content}
                    </button>
                )}
            )}
        </div>
    )
};

export default QuizQuestion;