import { scrambleWord, shuffleArray } from "../helpers/scrambleWords.helper";

export interface ScrambleWordsState {
    currentWord: string;
    errorCounter: number;
    guess: string;
    isGameOver: boolean;
    maxAllowErrors: number;
    maxSkips: number;
    points: number;
    scrambledWord: string;
    skipCounter: number;
    words: string[];
}

export type ScrambleWordsAction =
    | { type: 'SET_GUESS', payload: string }
    | { type: 'CHECK_ANSWER' }
    | { type: 'RESET_GAME' }
    | { type: 'SKIP_WORD' };


const GAME_WORDS = [
    'REACT',
    'JAVASCRIPT',
    'TYPESCRIPT',
    'HTML',
    'ANGULAR',
    'SOLID',
    'NODE',
    'VUEJS',
    'SVELTE',
    'EXPRESS',
    'MONGODB',
    'POSTGRES',
    'DOCKER',
    'KUBERNETES',
    'WEBPACK',
    'VITE',
    'TAILWIND',
];

export const getInitialState = (): ScrambleWordsState => {

    const shuffledWords = shuffleArray([...GAME_WORDS]);

    return {
        currentWord: shuffledWords[0],
        errorCounter: 0,
        guess: '',
        isGameOver: false,
        maxAllowErrors: 3,
        maxSkips: 3,
        points: 0,
        scrambledWord: scrambleWord(shuffledWords[0]),
        skipCounter: 0,
        words: shuffledWords,
    }
}

export const scrambleWordsReducer = (state: ScrambleWordsState, action: ScrambleWordsAction): ScrambleWordsState => {

    switch (action.type) {
        case 'SET_GUESS': {
            return {
                ...state,
                guess: action.payload.trim().toUpperCase(),
            };
        }
        case 'CHECK_ANSWER': {
            if (state.currentWord === state.guess) {
                const newWords = state.words.slice(1);
                return {
                    ...state,
                    points: state.points + 1,
                    currentWord: newWords[0],
                    words: newWords,
                    scrambledWord: scrambleWord(newWords[0]),
                    guess: '',
                };
            }
            return {
                ...state,
                errorCounter: state.errorCounter + 1,
                guess: '',
                isGameOver: state.errorCounter + 1 >= state.maxAllowErrors,
            }
        }
        case 'RESET_GAME': {

            const newWords = shuffleArray([...GAME_WORDS]);

            return {
                ...state,
                currentWord: newWords[0],
                errorCounter: 0,
                guess: '',
                isGameOver: false,
                points: 0,
                scrambledWord: scrambleWord(newWords[0]),
                words: newWords,
                skipCounter: 0,
            }
        }
        case 'SKIP_WORD': {

            const updatedWords = state.words.slice(1);

            return {
                ...state,
                currentWord: updatedWords[0],
                guess: '',
                scrambledWord: scrambleWord(updatedWords[0]),
                skipCounter: state.skipCounter + 1,
                words: updatedWords,
            }
        }
        default:
            return state;
    }
}