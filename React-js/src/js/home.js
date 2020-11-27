import React from 'react';
import '../css/Home.css';


function Body(){
    return (
      <div className="h-con-body">
        <h1>article</h1>
        <div className="h-itm-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
        <div className="h-itm-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
      </div>
  );
}


function Service(){
  return (
    <React.Fragment>
      <div className="h-service">
        <h1>Service</h1>
      </div>

      <div className="h-con-service">
        <div className="h-itm-service left">
          App Developer
        </div>
        <div className="h-itm-service right">
          Web Developer
        </div>
      </div>
    </React.Fragment>
  );
}


function About(){
  return(
    <React.Fragment>
    <div className="h-con-about">
      <h1 className="h-about">About me</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
    </React.Fragment>
  );
}


function Home(){
  return(
    <React.Fragment>
      <Body />
      <Service />
      <About />
    </React.Fragment>
    )
}



export { About, Service };
export default Home;;
