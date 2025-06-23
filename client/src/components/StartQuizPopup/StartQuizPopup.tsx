import './StartQuizPopup.css';

type Step = 1 | 2;

type Category = {
   name: string,
   id: number
};

type Level = {
   title: string,
   id: number
}

type Options = {
   categories: Category[],
   levels: Level[]
}

type BottomPopupProps = {
   options: Options | null;
   isOpen: boolean;
   onClose: () => void;
   step: Step;
   onCategorySelect: (category: string) => void;
   onDifficultySelect: (difficulty: string) => void;
   category: string | null;
};

const StartQuizPopup = (props: BottomPopupProps) => {
   const { options, isOpen, onClose, step, onCategorySelect, onDifficultySelect } = props;

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
                   {options?.categories?.map(category => (
                       <button
                           key={category.id}
                           className="category-level-btn"
                           onClick={() => onCategorySelect(category.name)}
                       >
                          {category.name}
                       </button>
                   ))}
                </>
            )}

            {step === 2 && (
                <>
                   {options?.levels?.map(level => (
                       <button
                           key={level.id}
                           className="category-level-btn"
                           onClick={() => onDifficultySelect(level.title)}
                       >
                          {level.title}
                       </button>
                   ))}
                </>
            )}
         </div>
      </div>
   )
};

export default StartQuizPopup;