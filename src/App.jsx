import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Blog from "./Blog";
import AboutMySelf from "./selfIntrudaction";
import Posts from "./PopularPosts";
import Tag from "./Tag";
const App = () =>{
  return (
      <div>
          <Header/>
          <div className="w3-row">
              <div className="w3-col l8 s12">
                <Blog/>
              </div>
              <div className="w3-col l4">
                  <AboutMySelf/>

                  <hr />

                  <Posts/>

                  <hr />

                  <Tag/>
              </div>
          </div>
          <Footer/>
      </div>
  )
}

export default App;