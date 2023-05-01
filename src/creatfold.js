import React ,{ Component } from "react";



class Frirstone extends Component{
constructor(){
    super();
    this.state ={
        name : "",
        age :1,
        agee:1,
    }
}   


HCN =()=>{  
    let a= this.state.age+1  ;
    let r =a%2;
    console.log("dddddddd "+a +" r " +r);
     if (r == 0) {
         this.setState({name : <nav className="funbger"><h1>This is created using functional Component
         </h1><p>This is done using external CSS</p><p style={{color:'green'}} >This is done using inline CSS</p></nav>
      })
     } else {
         this.setState({name : <a></a>  })
         
     }
     this.setState({age : this.state.age+1 })
     console.log(this.setState.age);
     this.setState({occup : "se"})
 }
 


 HCNRIGHT =()=>{  
    let a= this.state.agee+1  ;
    let r =a%2;
    console.log("dddddddd "+a +" r " +r);
     if (r == 0) {
         this.setState({namer : <nav className="funbgers"><h1>This is created using class Component
         </h1><p>This is done using external CSS</p><p style={{color:'green'}} >This is done using inline CSS</p></nav>
      })
     } else {
         this.setState({namer : <a></a>  })
         
     }
     this.setState({agee : this.state.agee+1 })
     console.log(this.setState.agee);
 }

    render(){
        // console.log("state of intro" , this.state ,this.occup);
        return <nav >
            <nav className="button">
                <span className="hov" onClick={this.HCN}>To see styling in functional component</span>
      <span  className="hov" onClick={this.HCNRIGHT}>To see styling in class component</span>

      </nav> 
      <nav className="buttons">
      <p > {this.state.name}</p>
      <p > {this.state.namer}</p>
            {/* <p>AGE : {this.state.age}</p>
            <p>occ : {this.state.occup}</p> */}
           </nav>
          {/* <Button nameprop={"nnnnnnnnn"} age={this.state.age}></Button> */}
           </nav>
         
        
    }

}
export default Frirstone;