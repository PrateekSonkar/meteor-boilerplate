import React from 'react';
import history from './history';
import PrivateHeader from './PrivateHeader';


export default  () => {
  return(
    <div>      
      <PrivateHeader title = "Hi There"/>
      <div>
        Dashboard page content
      </div>
        
    </div>
  )
}

// export default class Links extends React.Component {
//     render(){
//       return (
//       <div>
//         <PrivateHeader title = "Hi There"/>
//         <LinksList/>
//         <AddLink/>        
//       </div>
//     );
//     }
//   }