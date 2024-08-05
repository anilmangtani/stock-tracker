import { React } from "react";
import Image1 from "../../src/images/image2.jpg"
import "../pages/Home.css"
const Home = () =>{
    return(
        <div className="HomeContainer">
            <div className="leftSide">
                <h1>Make Better Investment Decisions With Alternative Data</h1>
                <p>Created by Anil Mangtani</p>
            </div>
            
            <div className="rightSide">
                <div className="image-container">
                    <img src ={Image1} alt="" srcset="" />
                    
                </div>
            </div>
        </div>
    )
}

export default Home;