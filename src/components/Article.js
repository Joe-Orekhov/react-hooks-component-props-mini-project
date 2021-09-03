import ReadTime from "./ReadTime"

function Article(props){
  return(
    <article>
      <h3>{props.title}</h3>
      <small>{props.date}</small>
      <ReadTime time={props.time}/>
      <p>{props.preview}</p>
    </article>

  )
}

export default Article;