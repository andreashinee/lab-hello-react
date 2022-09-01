/*import './App.css';
import logo-ih from './images/logo-ih.png';
import logo-menu from './images/logo-menu.png';
import logo-declarative from './images/logo-declarative.png';
import logo-components from './images/logo-components.png';
import logo-singleway from './images/logo-singleway.png';
import logo-jsx from './images/logo-jsx.png';

*/
function App() {
  return (
    <div className="App">


     <header className="App-header">

     <div className="box1">

     <img className={logo-ih} alt="logo-ih"/>

     <img className={logo-menu} alt="logo-menu"/>

      
        <h1>Say hello to <br></br> ReactJS</h1>
       
        <p1>You will learn how to use <br></br>
        the most popular frontend library,<br></br>
        and become a super Ninja developer.</p1>
        <br></br>
        <br></br>
        <button> Awesome!</button>
        <br></br>
        <br></br>

        </div>
        <div className="box3">
        <div className="box2">

        <img className={logo-declarative} alt="logo-declarative"/>
        <h3>Declarative</h3>
        <p>React makes it <br></br>
        painless to create<br></br>
        interactive UIs.</p>
        </div>

        <div className="box2">

        <img className={logo-components} alt="logo-components"/>
        <h3>Components</h3>
       <p>Build encapsulated <br></br>
       components that<br></br>
       manage their state.</p>
       </div>

       <div className="box2">

       <img className={logo-singleway} alt="logo-singleway"/>
       <h3>Single-Way</h3>
       <p>A set of inmutable <br></br>
       values are passed to<br></br>
       the component's.</p>
       </div>

       <div className="box2">

       <img className={logo-jsx} alt="logo-jsx"/>
       <h3>JSX</h3> 
       <p>Statically-typed,<br></br>
       designed to run on<br></br>
       modern bowsers.</p>

       </div>
       </div>
        
      </header>

    </div>
  );
}
export default App;