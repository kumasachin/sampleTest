import { ActionCreator, Dispatch } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { IJourneyState } from '../reducers/journeyReducer';
import { initiateApp } from '../../api/initiate-app';

export enum JourneyActionTypes {
    INITIATE_APP = 'INITIATE_APP',
    ERROR = 'ERROR'
}

export interface IinitiateAppAction {
    type: JourneyActionTypes.INITIATE_APP;
    data: any;
}

export interface IErrorAction {
    type: JourneyActionTypes.ERROR;
    errorMessage: string;
}
export type JourneyActions = IinitiateAppAction | IErrorAction;

/*<Promise<Return Type>, State Interface, Type of Param, Type of Action> */
export const fetchInitialData: ActionCreator<ThunkAction<Promise<any>, IJourneyState, null, IinitiateAppAction>> = () => {
    return async (dispatch: Dispatch) => {
        try {
            const result: any = await initiateApp();
            //let result = await (await fetch(`https://journey.ceo/api/breed/${journeyBreed}/images/random`)).json();
            if (!result.data)
                throw new Error(result.message);
            dispatch({data: result.data?.balances, type: JourneyActionTypes.INITIATE_APP });
        } catch (err) {
            console.error(err);
            dispatch({type: JourneyActionTypes.ERROR, errorMessage: err.message});
        };
    };
};
