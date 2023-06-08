import {CREATE_POST} from "./types";
import {showAlert} from "./actions";

const forbidden = ['fuck', 'spam', 'php'];

// export function forbiddenWordsMiddleware({dispatch}) {
//     return function(next) {
//         return function(action) {
//             if (action.type === CREATE_POST) {
//                 const found = forbidden.some(w => action.payload.title.includes(w));
//                 if (found) {
//                     return dispatch(showAlert('SPAM! pizdec'));
//                 }
//             }
//             return next(action);
//         }
//     }
// }
export function forbiddenWordsMiddleware({dispatch}) {
    return (next) => {
        return (action) => {
            if (action.type === CREATE_POST) {
                const found = forbidden.some(w => action.payload.title.includes(w));
                if (found) {
                    return dispatch(showAlert('SPAM! pizdec'));
                }
            }
            return next(action);
        }
    }
}
