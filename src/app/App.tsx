import { Provider } from "react-redux";

import { store } from "@app/store";
import { TaskPage } from "@pages/TaskPage";

function App() {
  return (
    <>
      <Provider store={store}>
        <h1>Мои задачи</h1>
        <TaskPage />
      </Provider>
    </>
  );
}

export default App;
