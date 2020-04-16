import MUIDataTable from "mui-datatables";
import React,{useState} from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';


const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing(3),
    alignSelf: 'flex-start'
  },
  paper: {
    boxShadow: 'none'
  },
  table: {
    minWidth: 750,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
  visuallyHidden: {
    border: 0,
    clip: 'rect(0 0 0 0)',
    height: 1,
    margin: -1,
    overflow: 'hidden',
    padding: 0,
    position: 'absolute',
    top: 20,
    width: 1,
  },
}));

const defaultOptions = {
  filterType: "dropdown",
  selectableRows: 'none',
  responsive: 'scrollFullHeight',
  textLabels: {
    body: {
      noMatch: "nothing found",
      toolTip: "ordering",
      columnHeaderTooltip: column => `ordering on ${column.label}`
    },
    pagination: {
      next: "next page",
      previous: "previous page",
      rowsPerPage: "rows",
      displayRows: "display rows",
    },
    toolbar: {
      search: "search",
      downloadCsv: "download CSV",
      print: "print",
      viewColumns: "view columns",
      filterTable: "filter table",
    },
    filter: {
      all: "all",
      title: "title",
      reset: "reset",
    },
    viewColumns: {
      title: "columns ",
      titleAria: "hide/show column",
    },
    selectedRows: {
      text: "selected row",
      delete: "delete",
      deleteAria: "delete selected rows",
    },
  }
};

export default function EnhancedTable(props) {
  const classes = useStyles();
  const [searchText,setSearchText] = useState('');
  const {title,data,columns,options,noPaper} = props;
  return noPaper ? <MUIDataTable 
  title={title} 
  data={data} 
  columns={columns} 
  classes={{
    paper: classes.paper
  }}
  options={{...defaultOptions, ...options}} 
/> : <div className={classes.root}>
      <MUIDataTable 
          title={title} 
          data={data} 
          columns={columns} 
          options={{...defaultOptions,
            searchText,
            searchPlaceholder:'search ',
            onSearchChange: value=> setSearchText(value)
          , ...options}} 
        />
    </div>;
}
