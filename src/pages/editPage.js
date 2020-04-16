import React, {useState, useEffect} from 'react';

const EditCategory = (props) => {

    useEffect(() => {
        setCategory(props.currentCategory)
    }, [props])

    const [Category, setCategory] = useState(props.currentCategory);

    const handleChange = e => {
        const {name, value} = e.target;
        setCategory({...Category, [name]: value});
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (Category.name && Category.Categoryname) props.updateCategory(Category);
    }

    return (
        <form>
            <label>Name</label>
            <input className="u-full-width" type="text" value={Category.name} name="name" onChange={handleChange} />
            <label>Categoryname</label>
            <input className="u-full-width" type="text" value={Category.Categoryname} name="Categoryname" onChange={handleChange} />
            <button className="button-primary" type="submit" onClick={handleSubmit} >Edit Category</button>
            <button type="submit" onClick={() => props.setEditing(false)} >Cancel</button>
        </form>
    )
}

export default EditCategory;