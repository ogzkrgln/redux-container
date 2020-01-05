import { YAZI_RENK, ARKA_PLAN_RENK } from '../action/index';

const initialState = {
    arkaPlan:'white',
    yaziRengi:'aqua'
}


  export default function reducer(state=initialState,action) {
      
      switch (action.type) {
          case ARKA_PLAN_RENK:
              return ({...state,arkaPlan:action.payload.renk});
          case YAZI_RENK:
              return ({...state,yaziRengi:action.payload.renk});
        default:
            return state;
      }
  }