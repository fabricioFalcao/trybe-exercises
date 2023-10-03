import { CharacterType, Dispatch } from "../../types";

export const SEARCH_BEGINS = 'SEARCH_BEGINS';
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS';
export const SEARCH_FAILURE = 'SEARCH_FAILURE';

const searchBegins = () => ({
  type: SEARCH_BEGINS
})

const searchSuccess = (character: CharacterType) => ({
  type: SEARCH_SUCCESS,
  payload: character
})

const searchFailure = (error: string) => ({
  type: SEARCH_FAILURE,
  payload: error
})

export const fetchCharacter = (name: string) => {
  return async (dispatch: Dispatch) => {
    try {
      dispatch(searchBegins());
      const response = await fetch(`https://anapioficeandfire.com/api/characters?name=${name}`);
      const data: CharacterType = await response.json()
      dispatch(searchSuccess(data[0]))
    } catch (error: any) {
      dispatch(searchFailure(error.message))
    }
  }
}