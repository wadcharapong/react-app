import React, { useState, useEffect, useContext, useReducer, useMemo ,useCallback} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './App.css';
import * as serviceWorker from './serviceWorker';
import styled from 'styled-components';
import TodoRedux from './redux/TodoRedux.jsx'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import reducer from './redux/reducer';

// class HelloWorldComp extends React.Component{
//   render(){
//   return <h1>Hello world class {this.props.title}</h1>
//   }
// }

// class HelloWorldInComp extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       tag: [],
//       count: 1
//     };
//   }
//   onIncrement = () => {
//     this.setState((prevState) => ({count: prevState.count +1}))
//   }

//   onDeincrement = () => {
//     this.setState((prevState) => ({count: prevState.count -1}))
//   }

//   render(){
//     const numbers = [];
//     for(let i = 1;i<=this.state.count; i++){
//       numbers.push(<li>{i}</li>)
//     }
//     return <div>
//       {this.state.count}
//       <ul>
//         {numbers}
//       </ul>
    
//       <button onClick={this.onIncrement}>plus</button>
//       <button onClick={this.onDeincrement}>minus</button>
//     </div>
//   }
// }

// function Item(props){
//   return (<li>{props.n}</li>)
// }

// function ItemList({items}){
//   return (<ul>{items.map(n => <Item key={n} n={n}/>)}</ul>)
// }
// class ItemEvent extends React.Component{
//   constructor(props){
//     super(props);
//     this.state = {
//       items: [],
//       count: 0,
//     };
//   }

//   myChangeHandler = (event) => {
//     if (event.key === 'Enter') {
//       const value = event.target.value
//       this.setState((prevState) => ({
//         count: prevState.count +1 ,
//         items: [...this.state.items , value]
//       }))
//       event.target.value = '';
//     }
//   }

//   render(){
//     return <div>
//       <input type="text" onKeyUp={this.myChangeHandler}/>
//       <ItemList items={this.state.items}></ItemList>
//     </div>
//   }
// }

// class Toggle extends React.Component {
//   constructor(props){
//     super(props)
//     this.state = {
//       isToggleOn: false,
//     }
//     this.handleClick.bind(this)
//   }

//   handleClick(){
//     this.setState((p) => ({isToggleOn: !p.isToggleOn}))
//   }

//   render(){
//     return (<div>
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'On':'Off'}
//       </button>
//     </div>)
//   }
// }

// class InputComp extends React.Component {

//   constructor(prop){
//     super(prop);
//     this.state = {
//       firstName : '',
//       lastName : '',
//     }
//   }
  
//   onChange = (event) => {
//     const name = event.target.name
//     const value = event.target.value
//     this.setState({[name]: value})

//   }

//   onSubmit = (event) => {
//     event.preventDefault();
//     const {firstName , lastName} = this.state;
//     const name = `${firstName} ${lastName}`.trim();
//     // alert(`Your name is ${this.state.name}`)
//     this.props.handleName(name);
//   }

//   render(){
//     const {firstName , lastName} = this.state;
//     const name = `${firstName} ${lastName}`.trim();
//     const header = name ? <h1>Hello {name}</h1> : null
//     return (
//       <form onSubmit={this.onSubmit}>
//         {/* {header} */}
//         firstName :: <input name="firstName" onChange={this.onChange} value={this.state.firstName} />
//         <br></br>
//         lastName :: <input name="lastName" onChange={this.onChange} value={this.state.lastName} />
//         <button type="submit">Submit</button>
//       </form>
//     )
//   }
// }

// class App extends React.Component{
  
//   state = {
//     name : ''
//   }

//   handleName = (name) =>{
//     this.setState({name});
//   }

//   render(){
//     const {name} = this.state;
//     const header = name ? <h1>Hello {name}</h1> : null
//     return (
//       <React.Fragment>
//         {header}
//         <InputComp handleName={this.handleName}/>
//       </React.Fragment>
//     )
//   }
// }


// class App2 extends React.Component{
  
//   state = {
//     count : 1
//   }

//   handleName = (name) =>{
//     this.setState({name});
//   }

//   render(){
//     return <> 
//       <button onClick={() => {this.setState({count:this.state.count+1})}}>Add</button>
//       {this.state.count < 10 && <LifeCycle count={this.state.count}/> }
//     </>
//   }
// }

// class LifeCycle extends React.Component{

//   constructor(props){
//     super(props);
//     console.log('constructor')
//     this.state = {
//       name: 'name'
//     }
//   }

//   static getDerivedStateFromProps(props,state){
//     console.log('DerivedStateFromProps');
//     console.log(props, state)
//     return { name: props.count % 2 === 0 ? 'even': 'odd'}
//   }
  
//   componentDidMount(){
//     console.log('componentDidMount')
//   }

//   shouldComponentUpdate(nextProps,nextState){
//     if(nextProps.count > 5){
//       return false;
//     }else {
//       return true;
//     }
//   }

//   getSnapshotBeforeUpdate(prevProps, prevState){
//     return {
//       count: prevProps.count,
//     }
//   }
  
//   componentDidUpdate(prevProps,prevState,snapShot){
//     console.log(snapShot)
//   }

//   componentWillUnmount(){
//     console.log('componentWillUnmount')
//   }

//   render(){
//     return (
//       <div>
//         {this.state.name}
//       </div>
//     )
//   }
// }

// function ComponentExample(props){
// return <h2>{props.title}</h2>
// }

// function Composition(){
//   const isEven = parseInt(Math.random() * 10 ,10) % 2 === 0;
//   const element = isEven ? <h2>Hello even</h2> : <span>Odd</span>
//   return (
//     <>
//       {element}
//       <ComponentExample title={'Hello world 2'}>
//         Hello world 3
//       </ComponentExample>
//       <h3>Hello world4</h3>
//     </>
//   )
// }

// const ColorContext =  React.createContext({})
// const FontSizeContent =  React.createContext({})

// class Todo extends React.Component{
//   static contextType = ColorContext;

//   render(){
//     return (
//       <ColorContext.Consumer>
//         {(color) => (
//           <FontSizeContent.Consumer>
//             {(fontSize) => (
//               <p style={{color: this.context.color, fontSize : this.context.fontSize}}>{this.props.title}</p>
//             )}
//           </FontSizeContent.Consumer>
//         )}
//       </ColorContext.Consumer>
//     )
//   }
// }

// function TodoList({color}){
//   return (
//     <div>
//       <Todo color={color} title={'todo 1'}/>
//       <Todo color={color} title={'todo 2'}/>
//       <ToggleTodoButton />
//     </div>
//   )
// }

// function ToggleTodoButton(){
//   return (
//     <ColorContext.Consumer>
//       {(context) => {
//         return <button onClick={context.toggleColor}>{context.color}</button>
//       }}
//     </ColorContext.Consumer>
//   )
// }

// function Hello(){
//   return <h1>Hello world !!!</h1>
// }

// const withLoadingComponent = (WrappedComponent) => {
//   return class ComponentLoading extends React.Component{
//     render(){
//       if(this.props.isLoading){
//         return <div>Loading</div>
//       }
//       return (
//         <>
//           <Hello />
//           <WrappedComponent />
//         </>
//       )
//     }
//   }
// } 
// const LoadingComponent = withLoadingComponent(Hello);

// const withInputComponent = (WrappedComponent) => {
//   return class InputText extends React.Component{
//     state = {
//       value : ''
//     }
//     render(){
//       return (
//         <>
//         <WrappedComponent/>
//         <p>Hello : {this.state.value}</p>
//         <input onKeyUp={(event) => (this.setState({value : event.target.value}))}></input>
//         </>
//       )
//     }
//   }
// }
// const InputComponent = withInputComponent(Hello);

// class AppC extends React.Component{
//   state = {
//     color : 'pink',
//     fontSize: 25,
//     count: 0,
//     toggleColor : () => {
//       this.setState(({color}) => ({ color : color === 'pink' ? 'gold':'pink'}))
//     }
//   }
//   render(){
//     const {color,fontSize,toggleColor} = this.state;
//     return (
//     <ColorContext.Provider value={{color,fontSize,toggleColor}}>
//       <FontSizeContent.Provider value={{fontSize}} >
//       {/* {this.state.count > 5 ? null :<Example/> } */}
//       <Example/>
//       <button onClick={ () => this.setState({count : this.state.count +1})}>ClickInterval</button>
//       </FontSizeContent.Provider>
//     </ColorContext.Provider>
//     )
//   }
// }

// function reducer(state,action){
//   switch (action.type){
//     case 'increment':
//       return state +1;
//     case 'decrement':
//       return state -1;
//     default:
//       return state;
//   }
// }

// function Example(props){
//   const [count, dispatchCount] = useReducer(reducer,0);
//   const [title, setTitle] = useState('');
//   const {color} = useContext(ColorContext);
//   const frontSizeContext = useContext(FontSizeContent);

//   // const [name, setName] = useState('');
//   // const name = useMemo(() => title + ' ' + count,[title, count]);
//   const name = useCallback((a) => title + ' ' + count + a,[title, count]);

//   useEffect(() => {
//     console.log('effect 1 ');
//     // setName(title + ' ' + count);
//   },[title])

//   useEffect(() => {
//     console.log('effect 2 ');
//     const inteval = setInterval(() => {
//       console.log('inteval');
//     },2000)
//     return () => {
//       clearInterval(inteval)
//     }
//   },[])

//   return (
//     <div>
//       <p>{name(1)}</p>
//        <p>this title is :: {title}</p>
//       <input value={title} onChange={(event) => setTitle(event.target.value)} />
//       <p>{count}</p>
//       <button onClick={() => dispatchCount({type: 'increment'})}>plus</button>
//       <button onClick={() => dispatchCount({type: 'decrement'})}>minus</button>
//     </div>
//   )
// }
// const ItemListX = styled.li`
//   color: ${props => props.color ? props.color : "blue"};
//   font-size: 50px;
// `;

// const ItemListXPlus = styled(ItemListX)`
//   background-color: green;
// `;

// function ExampleHook(){
//   const [itemList, setItemList] = useState([]);

//   const addItem = (event) => {
//     if (event.key === 'Enter'){
//       setItemList([...itemList,event.target.value])
//       event.target.value = ''
//     }
//   }
//   return (
//     <div>
//       <input onKeyUp={addItem}></input>
//       <ul>{itemList.map((item) => <ItemListXPlus>{item}</ItemListXPlus>)}</ul>
//     </div>
//   )
// }

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <TodoRedux />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
