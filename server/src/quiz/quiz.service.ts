import { Injectable } from "@nestjs/common";
import { quizCategories, quizDifficulties } from "../config/quiz-options.config";

@Injectable()
export class QuizService {
    getOptions() {
        return {
            categories: quizCategories,
            levels: quizDifficulties
        }
    }
}