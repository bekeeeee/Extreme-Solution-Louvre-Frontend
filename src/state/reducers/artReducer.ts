import { ArtsAction } from "../actions/artsAction";
import { ActionTypeArts } from "../action-types/artsActionTypes";
import { Art } from "../state-types/art";
// import { State, defaultState } from "../stateType";
interface ArtState {
  loading: boolean;
  error: string | null;
  data: Art[];
}
const initialState = {
  loading: false,
  error: null,
  data: [],
};

const reducer = (
  state: ArtState = initialState,
  action: ArtsAction
): ArtState => {
  switch (action.type) {
    case ActionTypeArts.ART_LIST_REQUEST: {
      console.log("ART_LIST_REQUEST");
      return { loading: true, error: null, data: [] };
    }
    case ActionTypeArts.ART_LIST_SUCCESS: {
      console.log("ART_LIST_SUCCESS", action.payload);

      return { loading: false, error: null, data: action.payload };
    }

    case ActionTypeArts.ART_LIST_FAIL: {
      console.log("ART_LIST_FAIL");

      return { loading: false, error: action.payload, data: [] };
    }

    case ActionTypeArts.ART_DELTE_ITEM: {
      console.log("ART_DELTE_ITEM");

      return {
        ...state,
        data: state.data.filter((x) => x.id !== action.payload),
      };
    }

    default:
      return state;
  }
};

export default reducer;
