import { Reducer } from 'redux';
import { JourneyActionTypes, JourneyActions } from '../actions/journeyActions';

export interface IJourneyState {
    initiateApp: any,
    loading: boolean;
    errorMessage: string | null;
    balances: object | null
}

const initialJourneyState: IJourneyState = {
    initiateApp: {},
    loading: false,
    errorMessage: '',
    balances: null
};

export const journeyReducer: Reducer<IJourneyState, JourneyActions> = (
    state = initialJourneyState,
    action
  ) => {
    switch (action.type) {
      case JourneyActionTypes.INITIATE_APP: {
        return {
          ...state,
          balances: action.data,
          errorMessage: null
        };
      }
      case JourneyActionTypes.ERROR: {
        return {
          ...state,
          errorMessage: action.errorMessage,
        }
      }
      default:
        return state;
    }
  };

  export default journeyReducer;