import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function CitySelector(props) {
  const classes = useStyles();
  const { city, setCity } = props;
  const handleChange = (event) => {
    const value = event.target.value;
    setCity(value);
  };
  let country;

  if (props === undefined) {
    country = 'none'
  } else {
    country = props.country
  } 

  return (
    <div>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label" style={{ color: 'black', fontSize: '20px' }}>{country}</InputLabel>
        <Select style={{ color: 'black', fontSize: '26px' }}
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={city}
          onChange={handleChange}
          label="City"
        >
          <MenuItem value='' style={{ color: 'black' }}>
            <em>None</em>
          </MenuItem>
          <MenuItem value={'London'}>London</MenuItem>
          <MenuItem value={'Kyiv'}>Kyiv</MenuItem>
          <MenuItem value={'Turka'}>Turka</MenuItem>
          <MenuItem value={'Lviv'}>Lviv</MenuItem>
          <MenuItem value={'Uzhgorod'}>Uzhgorod</MenuItem>
          <MenuItem value={'Chop'}>Chop</MenuItem>
          <MenuItem value={'Odessa'}>Odessa</MenuItem>
          <MenuItem value={'Sambir'}>Sambir</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}


