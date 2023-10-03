import { AnyAction } from "redux"
import { GOTState } from "../../types"
import { SEARCH_BEGINS, SEARCH_FAILURE, SEARCH_SUCCESS } from "../actions"

const INITIAL_STATE = {
  isLoading: false,
  character: null,
  error: null,
}

const characterReducer = (
  state: GOTState = INITIAL_STATE,
  action: AnyAction
) => {
  switch (action.type) {
    case SEARCH_BEGINS:
      return {
        ...state,
        isLoading: true,
      }

    case SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        character: action.payload || null,
      }

    case SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload || 'Erro desconhecido',
      }

    default:
      return state;
  }
}

export default characterReducer;