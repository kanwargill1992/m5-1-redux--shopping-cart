const initailState = {};

export default function cartReducer(state = initailState, action) {
  switch (action.type) {
    case "ADD_ITEM":
      return {
        ...state,
        [action.item.id]: {
          ...action.item,
          quantity: 1,
        },
      };
    case "REMOVE_ITEM": {
      const newState = { ...state };
      delete newState[action.item.id];
      return newState;
    }

    default:
      return state;
  }
}

export const getStoreItemArray = (state) => Object.values(state);
