import React from 'react'
import './App.css'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      firstName : '',
      array : [{name:'krishna',id:10},
      {name:'kane',id:14}]
    }
    this.handleChange = this.handleChange.bind(this)
    this.addList = this.addList.bind(this)
    this.deleteCard =this.deleteCard.bind(this)
  }  
  handleChange (event) {
    const { name , value } = event.target
    this.setState({
      [name]  : value
    })
  }
  addList(){
    let arr = this.state.array
    console.log({'name':this.state.firstName, 'id':parseInt(Math.random()*100)})
    arr.push({'name':this.state.firstName, 'id':parseInt(Math.random()*100)})
    this.setState({
      array : arr
    })
    console.log(this.state.array)
  }

  deleteCard(studentid) {
    console.log(studentid)
    this.setState({
      array: this.state.array.filter(person  => { 
        return person.id !== studentid
    })});
}

  
  render () {
        return (
      <div className="total"> 
      <div className='input'>
        <input 
        className='height'
        type='text'
        name='firstName'
        value={this.state.firstName}
        placeholder = 'firstName'
        onChange = {this.handleChange}
        size='40'
        />
        </div>
        <br />
        <div className='add'>
        <button className='list' onClick={this.addList} >AddList</button>
        </div>
        <div>
          <div>
          {this.state.array.map((student, index)  => {
        return(<div className='index'> <div className='name' key={index}> {student.name} 
        </div>
        <button className='button' onClick={() => this.deleteCard(student.id)}>X</button></div>)})}
        
        
        </div>
        </div>
        

      </div>
    )
  }
}
export default App 