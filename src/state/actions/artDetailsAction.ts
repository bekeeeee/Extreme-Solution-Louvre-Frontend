import { ActionTypeArtDetails } from "../action-types/artDetailsTypes";
import { Art } from "../state-types/art";

interface ArtDetailsRequestAction {
  type: ActionTypeArtDetails.ART_DETAILS_REQUEST;
}
interface ArtDetailsSuccessAction {
  type: ActionTypeArtDetails.ART_DETAILS_SUCCESS;
  payload: Art;
}
interface ArtDetailsFailAction {
  type: ActionTypeArtDetails.ART_DETAILS_FAIL;
  payload: string;
}
interface ArtDetailsClearAction {
  type: ActionTypeArtDetails.ART_DETAILS_CLEAR;
  payload: null;
}
export type ArtDetailsAction =
  | ArtDetailsRequestAction
  | ArtDetailsSuccessAction
  | ArtDetailsFailAction
  | ArtDetailsClearAction;
