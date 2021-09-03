import Article from "./Article"

function ArticleList(props){
  return (props.posts.map(blog => {
  return(
    <main>
      <Article title={blog.title} date={blog.date} preview={blog.preview} time={blog.minutes}/>
    </main>
  )
})
  )
}

export default ArticleList;