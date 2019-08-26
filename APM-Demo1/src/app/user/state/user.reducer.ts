import { User } from '../user';
import { State } from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface UserState {
  markUserName: boolean;
  currentUser: User;
}

const getUserFeatureState = createFeatureSelector<State>('users');

export const getMarkUserName = createSelector (
  getUserFeatureState,
  state => state.user.markUserName
  )

export const getCurrentUser = createSelector (
  getUserFeatureState,
  state => state.user.currentUser
)

export function reducer(state: User, action) {
  switch (action.type) {

    case 'MASK_USER_NAME':
      return {
        ...state,
        maskUserName: action.payload
      };

    default:
      return state;
  }
}
