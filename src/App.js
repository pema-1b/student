import "./styles.css";
import { AddDesuup } from "./AddDesuup";
import { DesuupList } from "./DesuupList";

function App() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <h3 className="text-center">Desuung management System</h3>
        </div>
      </div>
      <AddDesuup />
      <DesuupList />
    </div>
  );
}

export default App;
