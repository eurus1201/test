import React,{useState,useEffect} from 'react';
import Table from "components/table";
import IconButton from "@material-ui/core/IconButton";
import Data from 'constants/other.constant'

const UserTable = (props) => {
     const [items, setItems] = useState();

    const renderItem = (item, selectedIndex,props) => {
        return [
            1 + selectedIndex,
            item.id,
            item.text,
            item.children.map(permission => permission.text).join(" - "),
            <>
            
                <IconButton  onClick={() => props.deleteCategory(items.id)}>
                    delete
                </IconButton>
                <IconButton
                    onClick={() => props.editCategory(item.id, item.text, item.children)}
                >
                    edit
                </IconButton>
            </>
        ]
    }
    const loadTable = () => {
        setItems(Data.map((item, selectedIndex) => renderItem(item, selectedIndex)));
    }
    useEffect(() => {
        loadTable();
    }, []);

    return (<>
        <Table
            noPaper
            data={items}

            columns={[
                "num",
                "id",
                "text ",
                "child",
                "actions"
            ]}
        />
    </>)
}

export default UserTable;