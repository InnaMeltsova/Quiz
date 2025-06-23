import './QuizQuestion.css';

type Option = {
    content: string,
    id: number
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
    return (
        <div>
            <h2>{question?.question}</h2>
            {question?.options.map(option =>
                <div key={option.id} onClick={() => onAnswer(option.id)}>
                    {option.content}
                </div>
            )}
        </div>
    )
};

export default QuizQuestion;