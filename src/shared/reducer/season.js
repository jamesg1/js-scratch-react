// @flow

import Immutable from 'immutable'
import type { fromJS as Immut } from 'immutable'

import {
  SET_SEASON,
} from '../action/season'

const initialState = Immutable.fromJS({
  year: '201617',
})

const seasonReducer = (state: Immut = initialState, action: { type: string, payload: any }) => {
  switch (action.type) {
    case SET_SEASON:
      console.log(action)
      return state.set('year', action.payload)
    default:
      return state
  }
}

export default seasonReducer
