export function selectBook(book) {
    // selectBook is an ActionCreator, it needs to return an action,
    // an object with a type property
    // action 은 type 과 payload 두가지 value 를 가진다.
    // type 은 모든 문자를 대문자로 표시한다.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}

