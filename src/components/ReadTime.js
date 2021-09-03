function ReadTime(props){
  console.log(Math.round(parseInt(props.time) / 10))
  const TimeEmoji = ()=>{
    if (parseInt(props.time) >= 30){
      const roundedNum = Math.round(parseInt(props.time) / 10)
        return '🍱'.repeat(roundedNum)
      

    }else{
      const roundedNum = Math.round(parseInt(props.time) / 5)
        return '☕️'.repeat(roundedNum) 
    }
  }
  return(
    <div>
      <TimeEmoji />
    </div>
  )
}
export default ReadTime;