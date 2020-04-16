import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Table from 'components/table';
import Field from 'components/field';
import CircularProgress from '@material-ui/core/CircularProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import IconButton from "@material-ui/core/IconButton";
import EditIcon from '@material-ui/icons/EditRounded';
import PlanIcon from '@material-ui/icons/AssignmentRounded';
import AddIcon from '@material-ui/icons/AddRounded'
import DeleteIcon from '@material-ui/icons/DeleteRounded';
import Button from "@material-ui/core/Button";
import useTheme from "@material-ui/core/styles/useTheme";
import Data from 'constants/other.constant'
import CreateCategory from "pages/createPage";
import EditCategory from "pages/createPage";

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
    const [categories, setCategory] = useState([Data]);
    const [openDialog, setOpenDialog] = useState(false);
    const [state, setState] = useState({});
    const [editing, setEditing] = useState(false);
    const initialCategory = { id: null, text: '', children: '' };
    const [currentCategory, setCurrentCategory] = useState(initialCategory);

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
    const fields = [
        {
            name: "id",
            label: "id",
            type: 'text',
        },
        {
            name: "text",
            label: "text",
            type: 'text',
        },
        {
            name: 'children',
            label: "children",
            type: 'text',
        },
    ]
    const renderItem = (item, selectedIndex) => {
        return [
            1 + selectedIndex,
            item.id,
            item.text,
            item.children.map(child => child.text).join(" - "),
            <>
                <IconButton onClick={() => {
                    setOpenDialog(true);
                    setState(prevState => ({
                        ...prevState,
                        ...item,

                        selectedIndex
                    }))
                }}>
                    <DeleteIcon />
                </IconButton>
                <IconButton
                    onClick={() => {
                        setOpenDialog(true);
                        setState({
                            ...state,
                            ...item,
                            crudMode: true,
                            mode: 'u',
                            selectedIndex
                        })
                    }}
                >
                    <EditIcon />
                </IconButton>

                <IconButton
                    onClick={() => {
                        setOpenDialog(true);
                        setState({
                            ...state,
                            id: item.id,
                            text: item.text,
                            crudMode: false
                        })
                    }}
                >
                    <PlanIcon />
                </IconButton>
            </>
        ]
    }

    const loadTable = () => {
        setCategory(Data.map((item, selectedIndex) => renderItem(item, selectedIndex)))
    }


    useEffect(() => {
        loadTable();
    }, []);



    return <>
        <Table
            data={categories}
            title={<Button
                onClick={() => {
                    setState({ ...state, text: '', id: '' });
                }}
            >
                <CreateCategory
                                addCategory={addCategory}
                            />
               <AddIcon />ADD
            
            </Button>}
            columns={[
                "number",
                "id ",
                "text",
                "childrens",
                "actions"
            ]}
        />
        <Dialog
            open={openDialog}
            classes={{ paper: classes.dialog }}
            onClose={() => setOpenDialog(false)}
            maxWidth="lg"
        >
            <DialogTitle style={{ textAlign: 'center' }}>"tittle"</DialogTitle>
            <DialogContent >
                {editing ? (
                    <dive>
                        <EditCategory
                            currentCategory={currentCategory}
                            setEditing={setEditing}
                            updateCategory={updateCategory}
                        />
                    </dive>
                ) : (
                        <div>
                            <CreateCategory
                                addCategory={addCategory}
                            />
                        </div>
                    )
                }
            </DialogContent>
            <DialogActions>
                <Button onClick={() => setOpenDialog(false)}>
                    close
                </Button>
                {state.crudMode && <Button color="secondary"
                //  onClick={}
                  >
                    save
                </Button>}
            </DialogActions>
        </Dialog>
    </>
}