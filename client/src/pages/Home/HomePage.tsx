import './HomePage.css';
import StartQuizPopup from "../../components/StartQuizPopup/StartQuizPopup";
import {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
    const navigate = useNavigate();
    const [options, setOptions] = useState(null);
    const [popupOpen, setPopupOpen] = useState(false);
    const [popupStep, setPopupStep] = useState<1 | 2>(1);
    const [category, setCategory] = useState<string | null>(null);

    useEffect(() => {
        // fetch('http://10.0.0.148:3000/options')
        fetch('http://172.20.20.72:3000/options')
            .then(res => res.json())
            .then(data => setOptions(data))
    }, []);

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
        navigate('/quiz');
    }

    return (
        <div>
            <div className="startBtn" onClick={() => setPopupOpen(true)}>Start Quiz!</div>

            <StartQuizPopup
                options={options}
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