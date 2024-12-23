import { useDispatch } from 'react-redux';
import { changeFilter } from '../../redux/filters/slice.js';
import css from './SearchBox.module.css';
import { Box, TextField } from '@mui/material';

const SearchBox = () => {
  const dispatch = useDispatch();
  const handleSearchInput = e => {
    dispatch(changeFilter(e.target.value));
  };

  return (
    <div className={css.search}>
      <Box sx={{ width: 800, maxWidth: '100%' }}>
        <TextField
          fullWidth
          label="Search by name or number"
          type="text"
          onChange={handleSearchInput}
          id="search"
        />
      </Box>
    </div>
  );
};

export default SearchBox;
