import './StartQuizPopup.css';

type Step = 1 | 2;

type BottomPopupProps = {
   isOpen: boolean;
   onClose: () => void;
   step: Step;
   onCategorySelect: (category: string) => void;
   onDifficultySelect: (difficulty: string) => void;
   category: string | null;
};

const StartQuizPopup = (props: BottomPopupProps) => {
   const { isOpen, onClose, step, category, onCategorySelect, onDifficultySelect } = props;

   if(!isOpen) return null;

   return (
       <div className="wrapper">
         <div className="popup-sheet">
            <div className="popup-title">
               <div className="spancer"></div>
               <div className="title">{step === 1 ? 'Choose Category' : 'Choose Level'}</div>
               <div className="close-btn" onClick={onClose}>x</div>
            </div>

            {step === 1 && (
                <>
                   <button className="category-level-btn" onClick={() => onCategorySelect('History')}>History</button>
                   <button className="category-level-btn" onClick={() => onCategorySelect('Literature')}>Literature</button>
                   <button className="category-level-btn" onClick={() => onCategorySelect('Science')}>Science</button>
                   <button className="category-level-btn" onClick={() => onCategorySelect('Math')}>Math</button>
                </>
            )}

            {step === 2 && (
                <>
                   <button className="category-level-btn" onClick={() => onDifficultySelect('Beginner')}>Beginner</button>
                   <button className="category-level-btn" onClick={() => onDifficultySelect('Intermediate')}>Intermediate</button>
                   <button className="category-level-btn" onClick={() => onDifficultySelect('Advanced')}>Advanced</button>
                </>
            )}
         </div>
      </div>
   )
};

export default StartQuizPopup;