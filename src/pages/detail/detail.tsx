// rfce
import React from "react";
import { CustomCard  } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";

function Detail() {
  return (
    <div style={{backgroundImage: "url(https://picsum.photos/1000)", minHeight:'100vh'}}> 
      
      <CustomCard
                style={{ minHeight:'100vh'}}
                effectColor="#C780FF" // required
                color="#14AEFF" // default color is white
                blur={10} // default blur value is 10px
                borderRadius={0} // default border radius value is 10px
            >
                <h1>Hello</h1>
                <p>This is an example</p>
            </CustomCard>
    </div>
  );
}

export default Detail;
