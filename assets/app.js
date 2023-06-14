import './bootstrap.js';


/*
 * Welcome to your app's main JavaScript file!
 *
 * We recommend including the built version of this JavaScript file
 * (and its CSS file) in your base layout (base.html.twig).
 */

// any CSS you import will output into a single css file (app.css in this case)
import './styles/app.css';

import { registerReactControllerComponents } from '@symfony/ux-react';
registerReactControllerComponents(require.context('./react/controllers', true, /\.(j|t)sx?$/));

// function App() {

  
//     return (
//       <div>
//         <header >
//           <BrowserRouter>
//           <Navigation/>
//           <Routes>
//             <Route path="/" element ={<Home/>} />
//             <Route path="/competences" element ={<Competences/>}/>
//             <Route path="/portfolio" element ={<Portfolio/>}/>
//             <Route path="/contact" element ={<Contact/>}/>
//           </Routes>
//           </BrowserRouter>
//         </header>
//       </div>
//     );
//   }

// ReactDom.render((
//     <Router history={browserHistory}>
//         <Route path="/" component={Home}>
//             <IndexRoute component={Home} />
//             <Route path="/home" component={Home} />
//             <Route path="/competences" component={Competences} />        
//             <Route path="/portfolio" component={Portfolio} />
//             <Route path="/contact" component={Contact} />    
//         </Route>
//     </Router>
// ), document.getElementById('app'));  

//   export default App;