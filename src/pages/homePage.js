import React, { useState, useEffect } from 'react';
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import makeStyles from "@material-ui/core/styles/makeStyles";
import Table from 'components/table';
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
    const [openDialog, setOpenDialog] = useState(false);
    const [categories, setCategory] = useState([['loading...']]);
    const [state, setState] =  useState({});
    const theme = useTheme();

    const handleChange = name => value => {
        setState({ ...state, [name]: value.target.value })
    }


    const renderItem = (item, selectedIndex) => {
        return [
            1 + selectedIndex,
            item.id,
            item.text,
            item.children.map(permission => permission.text).join(" - "),
            <>
                <IconButton onClick={() => {
                    setOpenDialog(true);
                    setState(prevState => ({
                        ...prevState,
                        ...item,
                        crudMode: true,
                        mode: 'd',
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

    return <>
 <Table
            data={Data}
            title={<Button
                onClick={() => {
                    setOpenDialog(true);
                    setState({ ...state,text: '',id:'', crudMode: true,mode: 'c'});
                }}
            >
                <AddIcon />
               
            </Button>}
            columns={[
                "number",
                "id ",
                "text",
                "childrens",
                "actions"
            ]}
        />
    </>

}