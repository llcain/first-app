import { useEffect, useState } from "react";
import TopicList from "./TopicList";


const Home = () => {

    const [topics, setTopics] = useState (null);
    const [isPending, setIsPending] = useState(true);

    const handleDelete = (id) => {
        const newTopics = topics.filter(topic => topic.id !== id);
        setTopics(newTopics);
    }

    useEffect(() => {
        setTimeout(() => {
            fetch('http://localhost:8000/topics')
            .then(res => {
                return res.json();
            })
            .then(data => {
                setTopics(data);
                setIsPending(false);
            });
        }, 1000);
    }, []);

   
    
    return ( 
        <div className="home">
            { isPending && <div>Loading...</div> }
           {topics && <TopicList topics={topics} title="All Topics" handleDelete={handleDelete} />}
        </div>
     );
}
 
export default Home;