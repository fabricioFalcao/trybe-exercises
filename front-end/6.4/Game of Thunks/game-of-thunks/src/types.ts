import { AnyAction } from "redux"
import { ThunkDispatch } from "redux-thunk"

export type GOTState = {
  isLoading: boolean,
  character: CharacterType | null,
  error: null,
}

export type CharacterType = {
  name: string,
  culture: string,
  born: string,
  died: string,
  titles: string[],
  aliases: string[],
}

export type Dispatch = ThunkDispatch<GOTState, null, AnyAction>