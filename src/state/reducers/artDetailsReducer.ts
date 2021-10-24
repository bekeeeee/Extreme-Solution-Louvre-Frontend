import { ArtDetailsAction } from "../actions/artDetailsAction";
import { ActionTypeArtDetails } from "../action-types/artDetailsTypes";
import { Art } from "../state-types/art";
// import { State, initialState } from "../stateType";
interface ArtState {
  loading: boolean;
  error: string | null;
  data: Art | null;
}
const initialState = {
  loading: false,
  error: null,
  data: null,
};

const reducer = (
  state: ArtState = initialState,
  action: ArtDetailsAction
): ArtState => {
  switch (action.type) {
    case ActionTypeArtDetails.ART_DETAILS_REQUEST:
      return { loading: true, error: null, data: null };
    case ActionTypeArtDetails.ART_DETAILS_SUCCESS:
      return { loading: false, error: null, data: action.payload };

    case ActionTypeArtDetails.ART_DETAILS_FAIL:
      return { loading: false, error: action.payload, data: null };

    case ActionTypeArtDetails.ART_DETAILS_CLEAR:
      return { loading: false, error: null, data: null };

    default:
      return state;
  }
};

export default reducer;
