import { IGuessData, GuessnumberReduxService } from './guessnumberredux.service';
import { CREATE_GUESS, PROCESS_GUESS } from './actions';

export function rootReducer(state: IGuessData, action: any): IGuessData {
    let guessnumberReduxService = new GuessnumberReduxService();
    switch (action.type) {
        case CREATE_GUESS:
            return guessnumberReduxService.generateGuess(state, action.playersname, action.minvalue, action.maxvalue);
        case PROCESS_GUESS:
            return guessnumberReduxService.processGuess(state, action.guess);
    }
    return state;
}