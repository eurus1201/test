import React,{useState} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';

const CreateCategory= (props)=>{
const initCategory ={id: null, text: '', children: ''};
const [categoreis,setCatergory]= useState(initCategory);

const handleChange = e => {
    const {name, value} = e.target;
    setCatergory({...categoreis, [name]: value});
}
const handleSubmit = e => {
    e.preventDefault();
    if (categoreis.id && categoreis.text) props.addCategory(categoreis);
}

return<>
 <form>
            <label>id</label>
            <input className="u-full-width" type="text" value={categoreis.id} name="id" onChange={handleChange} />
            <label>text</label>
            <input className="u-full-width" type="text" value={categoreis.text} name="text" onChange={handleChange} />
            <label>children</label>
            <input className="u-full-width" type="text" value={categoreis.children} name="children" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Add user</button>
        </form>
</>
} 

export default CreateCategory; 