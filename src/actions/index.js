export function fetchResult(term) {
    return {
        type: 'TERM_SUBMITTED',
        payload: term
    };
}
