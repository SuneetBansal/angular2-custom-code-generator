export {
    <%= classify(name) %>AccessState,
    <%= classify(name) %>DataState,
    <%= classify(name) %>State,
    State
} from './<%= dasherize(name) %>.interface';