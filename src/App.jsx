const Header = (props) =>{
  console.log(props)
  return(
    <div>
      <p>{props.course}</p>
    </div>
  )

}



const Content = (props) =>{
  return(
    <div>
      <p>{props.part}</p> <p>{props.exercise}</p>
    </div>
  )
  
}


const Total = (props) =>{
  return(
    <div>
      <p>{props.total}</p>
    </div>
  )
  
}







const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content part={part1} exercise={10} />
      <Content part={part2} exercise= {exercises2}  />
      <Content part={part3} exercise= {exercises3}  />
      
      <Total total={ exercises1 + exercises2 + exercises3 }/>
    </div>
  )
}

export default App