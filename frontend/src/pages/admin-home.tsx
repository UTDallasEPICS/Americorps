import React from "react";
import homeImg from './rick_and_rosie.png';

function Home() {
  return (
    <div className="AdminHome">
        
        {/* Provides image of rick and rosie for Admin Home Page */}
        <div className="HomeImage">
            <img src={homeImg} alt='Rick and Rosie'/>
        </div>

        {/* Welcome to Americorps Title in Admin Home Page */}
        <h1 className="AmericorpsTitle"> WELCOME TO AMERICORPS </h1>
        
        {/* Filler text on Americorps title to be replaced in later design update */}
        <p className = "fillerText">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed massa orci interdum velit pretium. Ornare enim, 
            placerat nisl in est arcu eget sed.
        </p>
         
    </div>
  );
}

export default Home;