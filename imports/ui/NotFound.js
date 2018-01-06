import React from 'react';
import {Link} from 'react-router-dom';


// export default class NotFound extends React.Component {
//     render(){
//       return <p>Not Found</p>
//     }
//   }

export default  () => {
  return(
    <div className="boxed-view">
      <div className="boxed-view__box">
        <h1>Page Not found</h1>
        <p>We're not able to find page</p>
        <Link to="/">Head Home</Link>
      </div>
    </div>
      
    
  )
}