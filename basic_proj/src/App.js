import logo from './logo.svg';
import React,{useState,useEffect} from 'react';
import './App.css';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
function App() {
  const [contacts,setContacts]=useState([{name:"n",email:'N'}])
  const childValue=(contact)=>{
    setContacts([...contacts,contact])
  }
  useEffect(()=>{
    localStorage.setItem("contacts",JSON.stringify(contacts))
  },[contacts])
  useEffect(()=>{
    const totalList=JSON.parse(localStorage.getItem('contacts'))
    setContacts(totalList);
  },[])
  return (
    <div className="App">
     <Header/>
     <AddContact value={childValue}/>
     <ContactList contacts={contacts}/>
     </div>
  );
}

export default App;
