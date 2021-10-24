import { ActionTypeArts } from "../action-types/artsActionTypes";
import { Art } from "../state-types/art";

interface ArtListRequestAction {
  type: ActionTypeArts.ART_LIST_REQUEST;
}
interface ArtListSuccessAction {
  type: ActionTypeArts.ART_LIST_SUCCESS;
  payload: Art[];
}
interface ArtListFailAction {
  type: ActionTypeArts.ART_LIST_FAIL;
  payload: string;
}
interface ArtDeletItem {
  type: ActionTypeArts.ART_DELTE_ITEM;
  payload: string;
}

interface ArtDeletItemFail {
  type: ActionTypeArts.ART_DELTE_ITEM_FAIL;
  payload: string;
}
export type ArtsAction =
  | ArtListRequestAction
  | ArtListSuccessAction
  | ArtListFailAction
  | ArtDeletItem
  | ArtDeletItemFail;
