import { Route, Switch } from  'react-router-dom';
import CategoryList from "./CategoryList";
import ExerciseList from "./ExerciseList";

function App() {

  return (
    <Switch>
      <Route exact path='/'>
         <CategoryList />
      </Route>
      <Route exact path='/:category/:id'>
         <ExerciseList />
      </Route>
    </Switch>
  );
}

export default App;
