import './HomePage.css';
import StartQuizPopup from "../../components/StartQuizPopup/StartQuizPopup";
import {useState} from "react";

const HomePage = () => {
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupStep, setPopupStep] = useState<1 | 2>(1);
    const [category, setCategory] = useState<string | null>(null);

    const handleClosePopup = () => {
        setPopupOpen(false);
        setPopupStep(1);
        setCategory(null);
    }

    const handleCategorySelect = (category: string) => {
        setCategory(category);
        setPopupStep(2);
    }

    const handleDifficultySelect = (difficulty: string) => {
        console.log('Start game with:', category, difficulty);
        handleClosePopup();
    }

    return (
        <div>
            <div className="startBtn" onClick={() => setPopupOpen(true)}>Start Quiz!</div>

            <StartQuizPopup
                isOpen={popupOpen}
                onClose={handleClosePopup}
                step={popupStep}
                category={category}
                onCategorySelect={handleCategorySelect}
                onDifficultySelect={handleDifficultySelect}
            />
        </div>
    )
};

export default HomePage;