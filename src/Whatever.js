import React, {Component} from 'react';

class SelectTimeComponent extends Component{
    constructor(props){
      super(props);
      this.state = {
        actualTime : [{id: 1, value: '8am - 9am'}, {id: 2, value: '9am - 10am'}, {id: 3, value: "12am - 1pm"}, {id: 4, value: '10am - 11am'}, {id: 5, value : "5pm - 7pm" }],
      timeState: ['8am - 9am', '12am - 1pm', '10am - 11am', "2pm - 3pm"]
      }
    }
  
    render(){
      return(
        <div style={{"textAlign": "center", "margin-top": "30px"}}>
          <select>
          {
              this.state.actualTime.map(item =>{
                var t = this.state.timeState.find(timeValue => timeValue.firstDate === item.value)
                if(t == undefined){
                  t = ""
                }
                
                if(item.value === t.firstDate){
                  return (
                    <option disabled>{item.value}</option>
                  )
                }else{
                  return(
                    <option >{item.value}</option>
                  ) 
                }
              })
        }
          </select> 
        </div>
        )
    }
  }
  
  class App extends Component{
    render(){
      return (
        <div>
            <SelectTimeComponent />
        </div>
    )
  }
}

export default App;