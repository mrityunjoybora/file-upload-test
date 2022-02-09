import { useState } from "react";
import './App.css';
import axios from "axios";

const App = () => {
  const [file, setFile] = useState(null);
  
  const onFormSubmit = (e) => { 
    e.preventDefault();

    const formData = new FormData();  
    formData.append("photo", file);

    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    }


    const url = "http://localhost:3001/user/upload";

    try {
      axios.post(url, formData, config);
      alert("Image uploaded successfully!");
    } catch (error) {
      console.log(error);
    }
    

  }
  
  const onInputChange = (e) => { 
    setFile(e.target.files[0])
  }

  return (
    <div className="App">
      <form onSubmit={onFormSubmit}>
        <h1>Upload file</h1>
        <input type="file" name="photo" onChange={
          onInputChange
        } />
        <button type="submit">Upload</button>
    </form>
    </div>
  );
}

export default App;
