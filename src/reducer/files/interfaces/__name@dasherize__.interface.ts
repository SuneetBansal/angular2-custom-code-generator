// custom imports
import { ObjectAvailabilityDetail } from "../../common/interface/interface";

export interface <%= classify(name) %>AccessState {
  objectAvailabilityDetail: ObjectAvailabilityDetail;
}

export interface <%= classify(name) %>DataState {}

export interface <%= classify(name) %>State {
  <%= dasherize(name) %>AccessState: <%= classify(name) %>AccessState;
  <%= dasherize(name) %>DataState: <%= classify(name) %>DataState;
}

interface State {
  <%= dasherize(name) %>: <%= classify(name) %>State;
}