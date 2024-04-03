const TopicList = ({ topics, title, handleDelete }) => {
    return ( 
        <div className="topic-list">
             <h2>{title}</h2>
            {topics.map((topic) => (
                <div className="topic-preview" key={topic.id }>
                <h2>{topic.title}</h2>
                <p>Written by: { topic.author }</p>
                <button onClick={() => handleDelete(topic.id)}>delete topic</button>
            </div>
            ))}
        </div>
     );
}
 
export default TopicList;