/* 
Start here and then work through the 
PostsContainer components and the CommentSection Components. 
Not all files need code added. 
Look at each file to see where you need to pass props or add code 
*/
import React, {useState} from "react";
import "./App.css";
//import the PostsPage and SeachBar and add them to the App
import SeachBar from "./components/SearchBar/SearchBarContainer";
import PostPage from "./components/PostsContainer/PostsPage"
//import dummydata
import dummyData from "./dummy-data";
import SearchBar from "./components/SearchBar/SearchBarContainer";

const App = () => { 
  // set up state for the dummy data and pass to your PostsPage
  const [data] = useState(dummyData);
  return (
    <div className="App">
      {/* Add components here  and pass props where appropriate */}
      <SearchBar/>
      <PostPage postData={data}/>
    </div>
  );
};

export default App;
