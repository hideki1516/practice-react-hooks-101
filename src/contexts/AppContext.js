import { createContext } from "react";

const AppContext = createContext();

export default AppContext;

// データの共有化 実装例
// 1：プロバイダーとコンシューマー、
// コンポーネント間で渡されるデータをコンシューマー側で購読することでデータを共有する
// 2：useContextというHooksを使用する