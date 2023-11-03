// function App(){
    //   const[count, setCount]= useState(0);
    
    //   function handleChange(e){
    //     if(e.target.value === 'Inc')
    //      {
    //       setCount(c=>c+1);
    //       setCount(c=>c+1)
    //      }
    //     else if(e.target.value === 'Dec')
    //      setCount(count-1);
    //     else
    //     setCount(0)
    //   }
    // let count=0;
    // function handleChange(e){
    //       if(e.target.value === 'Inc')
    //        {
    //         count
    //        }
    //       else if(e.target.value === 'Dec')
    //        setCount(count-1);
    //       else
    //       setCount(0)
    //     }
    
    // return(
    //   <div style={{textAlign : "center", padding: "50px"}}>
    //     <h1>Counter : {count}</h1>
    //     <button onClick={handleChange} value={'Inc'}>Increment</button>
    //     <button onClick={handleChange} value={'Dec'}>Decrement</button>
    //     <button onClick={handleChange}>Reset</button>
    //   </div>
    // )
    // }
    
    // ...........Class Based....................
    
    // class App extends React.Component{
    
    // }
    // class App extends Component {
    //   constructor() {
    //     super();
    //     this.state = {
    //       count: 0,
    //     };
    //     this.handleChange = this.handleChange.bind(this);
    //   }
    
    //   handleChange() {
    //     this.setState({
    //       count: this.state.count + 1,
    //     });
    //   }
    
    //   render() {
    //     return (
    //       <>
    //         <div>Count: {this.state.count}</div>
    //         <button onClick={this.handleChange}>Increment</button>
    //       </>
    //     );
    //   }
    // }
    // export default App;
    