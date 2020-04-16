import React, { useState, useEffect } from 'react';

import makeStyles from "@material-ui/core/styles/makeStyles";

import useTheme from "@material-ui/core/styles/useTheme";
import Data from 'constants/other.constant'
import CreateCategory from "pages/createPage";
import EditCategory from "pages/createPage";
import UserTable from "components/tables"

const useStyles = makeStyles(theme => ({
    paper: {
        borderRadius: 20,
        padding: 20,
        display: 'flex',
        alignItems: 'flex-end',
    },
    button: {
        margin: `0 ${theme.spacing(1)}px`,
        width: 130,
        justifyContent: 'center'
    },
    circularProgress: {
        color: 'inherit'
    },
    dialog: {
        borderRadius: 25,
        [theme.breakpoints.down('xs')]: {
            borderRadius: 0
        }
    },
    field: {
        flex: '1 1 auto',
        width: '100%'
    },
    datePicker: {
        marginTop: 0
    },
}));

export default () => {
    const classes = useStyles();
    const [categories, setCategory] = useState();
    const [state, setState] = useState({});
    const [editing, setEditing] = useState(false);
    const initialCategory = { id: null, text: '', children: '' };
    const [currentCategory, setCurrentCategory] = useState();

    const theme = useTheme();

    const handleChange = name => value => {
        setState({ ...state, [name]: value.target.value })
    }

    const addCategory = category => {
        category.id = categories.lenght + 1;
        setCategory([...categories, category])
    }

    const deleteCategory = id => {
        setCategory(categories.filter(category => category.id !== id));
    }

    const editCategory = (id, category) => {
        setEditing(true);
        setCurrentCategory(category);
    }
    const updateCategory = (newCategory) => {
        setCategory(Data.map(category => (category.id === currentCategory.id ? newCategory : category)))
        setCurrentCategory(initialCategory)
        setEditing(false)
    }


    return <>
      <div className="container">
      <h1>React CRUD App with Hooks</h1>
      <div className="row">
        <div className="five columns">
          { editing ? (
            <div>
              <h2>Edit </h2>
              <EditCategory 
                currentCategory={currentCategory}
                setEditing={setEditing}
                updateCategory={updateCategory}
              />
            </div>
          ) : (
            <div>
              <h2>Add </h2>
              <CreateCategory addCategory={addCategory} />
            </div>
          )}
        </div>
        <div className="seven columns">
          <h2>View </h2>
          <UserTable  categories={categories} deleteCategory={deleteCategory} editCategory={editCategory} />
        </div>
      </div>
    </div>


    </>
}