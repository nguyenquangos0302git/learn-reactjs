import ColorFeature from "./features/ColorFeature";
import PostFeature from "./features/PostFeature";
import TodoFeature from "./features/TodoFeature";
import ClockFeature from "./features/ClockFeature";
import ColorHook from "./features/ColorHook";
import CountFeature from "./features/CountFeature";

function App() {
  return (
    <div>
      <ColorFeature />
      <TodoFeature />
      <PostFeature />
      <ClockFeature />
      <ColorHook />
      <CountFeature />
    </div>
  );
}

export default App;
