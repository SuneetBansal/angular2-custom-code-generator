// lib import
import { Action } from '@ngrx/store';

// custom imports
import {
    ResultType,
    RootObjectMethod,
    RootObjectSignal,
    StateAction
} from '../../common/constants/enums';
import { GenericErrorHandlerAction } from '../../core/async-actions/error-handler/error-handler-action';
export const <%= classify(name.toUpperCase()) %> = '<%= dasherize(objectName) %>';
export const INTROSPECT_<%= classify(name.toUpperCase()) %> = '[Introspect]' + <%= classify(name.toUpperCase()) %>;
export const MODEL_UPDATED_<%= classify(name.toUpperCase()) %> = '[Modelupdated]' + <%= classify(name.toUpperCase()) %>;
export const RESET_<%= classify(name.toUpperCase()) %> = '[Reset]' + <%= classify(name.toUpperCase()) %>;

export class Reset<%= classify(name) %>Action implements Action {
  readonly type = RESET_<%= classify(name.toUpperCase()) %>;
  constructor(public payload: string) { }
}

export class ModelUpdated<%= classify(name) %>Action implements Action {
  readonly type = MODEL_UPDATED_<%= classify(name.toUpperCase()) %>;
  constructor(public payload: string) { }
}

export class Introspect<%= classify(name) %>Action implements Action {
  readonly type = INTROSPECT_<%= classify(name.toUpperCase()) %>;
  constructor(public payload: any) { }
}

export abstract class ActionCreator {
  public static getAction(
      itemName: string,
      payload: string,
      resultType: ResultType): Action {

    let action: Action;
    if (resultType === ResultType.Success) {
      switch (itemName) {
        case RootObjectMethod.Introspect:
          action = new Introspect<%= classify(name) %>Action(JSON.parse(payload).result);
          break;

        case RootObjectSignal.ModelUpdated:
          action = new ModelUpdated<%= classify(name) %>Action(JSON.parse(payload).result);
          break;

        case StateAction.Reset:
          action = new Reset<%= classify(name) %>Action('');
          break;

        default:
          break;
      }
    } else if (resultType === ResultType.Error) {
      action = new GenericErrorHandlerAction(payload);
    }

    return action;
  }
}


export type Actions =  
    Reset<%= classify(name) %>Action |
    ModelUpdated<%= classify(name) %>Action |
    Introspect<%= classify(name) %>Action;

