// custom imports
import { ObjectAvailability } from '../../common/constants/enums';
import { ObjectAvailabilityDetail } from '../../common/interface/interface';
import * as utility from '../../common/utils/utility-methods';
import { 
    <%= classify(name) %>AccessState,
    <%= classify(name) %>DataState,
    <%= classify(name) %>State
} from '../interface';
import * as <%= dasherize(name) %>Actions from '../action/<%= dasherize(name) %>-action';

export const initialState: <%= classify(name) %>State = {
    <%= dasherize(name) %>AccessState: {
        objectAvailabilityDetail:{ 
            objectAvailability: ObjectAvailability.Unknown,
            objectName: '<%= dasherize(objectName) %>',
            timeStamp: 0
        }
    },
    <%= dasherize(name) %>DataState: {}
};


export function reducer(
    state = initialState,
    action: <%= dasherize(name) %>Actions.Actions): <%= classify(name) %>State {
  switch (action.type) {
    case <%= dasherize(name) %>Actions.RESET_<%= classify(name.toUpperCase()) %>:
      return {
        ...state,
        <%= dasherize(name) %>DataState: initialState.<%= dasherize(name) %>DataState,
        <%= dasherize(name) %>AccessState: {
          ...initialState.<%= dasherize(name) %>AccessState,
          objectAvailabilityDetail: {
            objectAvailability: ObjectAvailability.NotAvailable,
            objectName: initialState.<%= dasherize(name) %>AccessState.objectAvailabilityDetail.objectName,
            timeStamp: initialState.<%= dasherize(name) %>AccessState.objectAvailabilityDetail.timeStamp,
          }
        }
      };

    case <%= dasherize(name) %>Actions.INTROSPECT_<%= classify(name.toUpperCase()) %>:
      return {
        ...state,
        <%= dasherize(name) %>AccessState: {
          objectAvailabilityDetail: {
            objectAvailability: utility.isObjectAvailable(state.<%= dasherize(name) %>AccessState.objectAvailabilityDetail.objectName,
               action.payload),
            objectName: state.<%= dasherize(name) %>AccessState.objectAvailabilityDetail.objectName,
            timeStamp: state.<%= dasherize(name) %>AccessState.objectAvailabilityDetail.timeStamp
          }
        },
        <%= dasherize(name) %>DataState: action.payload
      };

    case <%= dasherize(name) %>Actions.MODEL_UPDATED_<%= classify(name.toUpperCase()) %>:
      return {
        ...state,
        <%= dasherize(name) %>AccessState: {
          ...state.<%= dasherize(name) %>AccessState,
          objectAvailabilityDetail: {
            objectAvailability: action.payload.newobject === true ? ObjectAvailability.Added : ObjectAvailability.Removed,
            objectName: state.<%= dasherize(name) %>AccessState.objectAvailabilityDetail.objectName,
            timeStamp: new Date().getTime()
          }
        }
      };

    default:
      return state;
  }
}
