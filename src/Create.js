import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {

     const [title, setTitle] = useState('');
     const [body, setBody] = useState('');
     const [author, setAuthor] = useState('');
     const history = useHistory();

     const handleSubmit = (e) => {
          e.preventDefault();
          const topic = { title, body, author };

          fetch('https://localhost:8000/topics/', {
               method: 'POST',
               headers: { "Content-Type": "application/json"},
               body: JSON.stringify(topic)
          }).then(() => {
               // history.go(-1);
               history.push('/');
          })
     }

    return ( 
       <div className="create">
            <h2>Add a New Hot Topic</h2>
            <form>
               <label>Hot Topic Title:</label>
               <input
               type="text"
               value={title}
               required
               onChange={(e) => setTitle(e.target.value)}
               />
               <label>Hot Topic Body:</label>
               <textarea
               required
               value={body}
               onChange={(e) => setBody(e.target.value)}
               ></textarea>
               <label>Hot Topic Author:</label>
               <input
               type="text"
               value={author}
               onChange={(e) => setAuthor(e.target.value)}
               />
               <button onClick={handleSubmit}>Add Hot Topic</button>
            </form>
       </div>
     );
}
 
export default Create;