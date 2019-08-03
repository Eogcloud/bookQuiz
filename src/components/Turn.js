import React from "react";
import AuthorQuiz from "../AuthorQuiz";

function Turn(){
  
    return (
      <div className="row turn " style={{ backgroundColor: "white" }}>
        <div className="col-4 offset-1">
          <img src={} className="authorimage" alt="author" />
        </div>
        <div className="col-6">
          {books.map(title => (
            <p>{title}</p>
          ))}
        </div>
      </div>
    )
  }


export default Turn;
