function About(props){
  return(
    <aside>
      <img src={ props.image ||"https://via.placeholder.com/215 (Links to an external site.)"} alt="blog logo"></img>
      <p>{ props.about || "SOMETHING SOMTHING"}</p>
    </aside>
  )
}

export default About;