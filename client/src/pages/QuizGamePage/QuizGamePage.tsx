import './QuizGamePage.css';
import QuizQuestion from "../../components/QuizQuestion/QuizQuestion.tsx";

const QuizGamePage = () => {
    const question = {
        question: 'test question',
        options: [
            {
                content: 'Option number 1',
                isCorrect: false
            },
            {
                content: 'Option number 2',
                isCorrect: true
            },
            {
                content: 'Option number 3',
                isCorrect: false
            },
            {
                content: 'Option number 4',
                isCorrect: false
            }
        ],
        id: 1
    }
    return (
        <QuizQuestion
            question={question}
            onAnswer={() => {}}
        />
    )
};

export default QuizGamePage;