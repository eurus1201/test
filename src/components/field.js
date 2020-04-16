import React from 'react';
import PropTypes from 'prop-types';
import TextField from "@material-ui/core/TextField";
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from "@material-ui/core/Grid";
import makeStyles from "@material-ui/core/styles/makeStyles";
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useTheme from '@material-ui/core/styles/useTheme';

const useStyle = makeStyles(theme=>({
    textField: {
        alignItems: 'initial',
        background: 'transparent',
        margin: '0px !important',
    },
    textFieldRoot: {
        background: '#FFF',
        borderRadius: 40,
        marginTop: theme.spacing(3)
    },
    label: {
        top: -12,
    },
}))

const Field = ({type,gridProps,hidden,...rest}) => {
    const classes = useStyle();
    const theme = useTheme();
    const isDownXs = useMediaQuery(theme.breakpoints.down('xs'));
    if (hidden) return null;
        switch (type) {
            case 'select-box':
                return gridProps ? <Grid item {...gridProps}><FormControl error={rest.error} className={rest.className}>
                <Select {...rest} placeholder={' '}/>
                {rest.helperText && <FormHelperText error={rest.error}>{rest.helperText}</FormHelperText>}
            </FormControl></Grid> :
                <FormControl error={rest.error} className={rest.className}>
                <Select {...rest} placeholder={' '}/>
                {rest.helperText && <FormHelperText error={rest.error}>{rest.helperText}</FormHelperText>}
            </FormControl>;
            case 'select':
                const {className,label,items,helperText,id, ...selectRest} = rest;
                return gridProps ? <Grid item {...gridProps}><FormControl error={rest.error} className={className}>
                    <InputLabel error={selectRest.error} htmlFor={`${id || ''}-${label}`}>{label}</InputLabel>
                    <Select
                        id={`${id || ''}-${label}`}
                        native={isDownXs}
                        {...selectRest}
                    >
                        {isDownXs ? <> <option disabled selected hidden></option> {items.map(item=><option key={item.label} value={item.value}>{item.label}</option>)} </>:
                        items.map(item=><MenuItem key={item.label} value={item.value}>{item.label}</MenuItem>)}
                    </Select>
                    {helperText && <FormHelperText error={selectRest.error}>{helperText}</FormHelperText>}
                </FormControl></Grid> :
                <FormControl className={className}>
                    <InputLabel error={selectRest.error} htmlFor={`${id || ''}-${label}`}>{label}</InputLabel>
                    <Select
                        id={`${id || ''}-${label}`}
                        native={isDownXs}
                        {...selectRest}
                    >
                        {isDownXs ? <> <option disabled selected hidden></option> {items.map(item=><option value={item.value}>{item.label}</option>)} </>:
                        items.map(item=><MenuItem value={item.value}>{item.label}</MenuItem>)}
                    </Select>
                    {helperText && <FormHelperText error={selectRest.error}>{helperText}</FormHelperText>}
                </FormControl>
            default:
                const {InputProps, ...restDefault} = rest;
                return gridProps ? <Grid item {...gridProps}><TextField
                    type={type}
                    classes={{
                        root: classes.textFieldRoot
                    }}
                    InputProps={{
                        classes: {
                            root: classes.textField,
                        },
                        ...InputProps    
                    }}
                    InputLabelProps={{
                        classes: {
                            root: classes.label
                        }
                    }}
                {...restDefault} /></Grid> :
            <TextField
                type={type}
                classes={{
                    root: classes.textFieldRoot
                }}
                InputProps={{
                    classes: {
                        root: classes.textField,
                    },
                    ...InputProps
                }}
                InputLabelProps={{
                    classes: {
                        root: classes.label
                    }
                }}
                {...restDefault} />;
    
        }
    
};

Field.propTypes = {
    type: PropTypes.string,
    gridProps: PropTypes.shape(Grid.prototype),
    ...TextField.propTypes,
}

export default Field;
