// action = {
//     type: 'CREATE_EVENT',
//     title: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては...'
// }

// # before
// state = []

// # after
// state = [
//     id: 1,
//     title: '2020東京オリンピックのお知らせ',
//     body: '2020年に東京でオリンピックを開催します！つきましては...'
// ]

// # before
// state = [
//     { id:1, title: 'タイトル1', body: 'ボディー1' },
//     { id:2, title: 'タイトル2', body: 'ボディー2' },
//     { id:3, title: 'タイトル3', body: 'ボディー3' },
// ]

// # after
// state = [
//     { id:1, title: 'タイトル1', body: 'ボディー1' },
//     { id:2, title: 'タイトル2', body: 'ボディー2' },
//     { id:3, title: 'タイトル3', body: 'ボディー3' },
//     {
//         id: 4,
//         title: '2020東京オリンピックのお知らせ',
//         body: '2020年に東京でオリンピックを開催します！つきましては...'
//     },
// ]

const events = (state = [], action) => {
    switch(action.type) {
        case 'CREATE_EVENT':
            const event = { title: action.title, body: action.body };
            const length = state.length;
            const id = length === 0 ? 1 : state[length - 1].id + 1;
            return [...state, { id, ...event }];
        case 'DELETE_EVENT':
            // filter : 要素が詰まった配列から、条件にあった要素を取り出して新しい配列を作成する
            // stateを1件ずつfilter()でチェック
            // →event.idで取り出す
            // →actionで渡ってくるidと等しくないものだけを抽出する
            // 等しくない=削除したくないid を新しい配列にして表示する（等しいもの＝削除対象）
            return state.filter(event => event.id !== action.id);
        case 'DELETE_ALL_EVENTS':
            return []; // 空配列を渡して全ての入力削除する
        default: 
            return state;
    }
};

export default events;