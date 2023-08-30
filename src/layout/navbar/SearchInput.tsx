import { Autocomplete, Box, CircularProgress, TextField } from '@mui/material';
import { alpha, styled } from '@mui/material/styles';
import { useState } from 'react';
import { BiSearchAlt } from 'react-icons/bi';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootStoreState } from '../../redux/store';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: theme.spacing(1),
  width: 'auto',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 1),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: '1.5rem',
  color: '#fff',
}));

const Input = styled(TextField)(({ theme }) => ({
  '& .MuiInputBase-root': {
    padding: '0 !important',
  },
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, `calc(1em + ${theme.spacing(2)})`),
    transition: theme.transitions.create('width'),
    width: 0,
    color: '#fff',
    '&:focus, &:valid': {
      width: '20ch',
      paddingLeft: `calc(1em + ${theme.spacing(3)})`,
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },

  '& .MuiAutocomplete-endAdornment, & .MuiOutlinedInput-notchedOutline': {
    display: 'none',
  },
}));

function SearchInput() {
  const navigateTo = useNavigate();
  const [timerId, setTimerId] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const exercises = useSelector((state: RootStoreState) => state.api.exercises);

  const onFocus = () => {
    setIsLoading(true);

    const timer = setTimeout(() => {
      setIsLoading(false);
      setIsOpen(true);
    }, 1000);

    setTimerId(timer);
  };

  const onBlur = () => {
    clearTimeout(timerId);
    setIsOpen(false);
    setIsLoading(false);
  };
  const onOptionClick = (id: string) => {
    navigateTo(`/exercises/${id}`);
  };

  return (
    <Autocomplete
      id='navbar-search-input'
      options={exercises}
      open={isOpen}
      loading={isLoading}
      onFocus={onFocus}
      onBlur={onBlur}
      getOptionLabel={(option) => option.name}
      renderInput={(params) => (
        <Search>
          <SearchIconWrapper>
            {isLoading ? (
              <CircularProgress color='inherit' size={20} />
            ) : (
              <BiSearchAlt />
            )}
          </SearchIconWrapper>

          <Input
            {...params}
            placeholder={isOpen ? 'Search ...' : ''}
            required
            inputProps={{ 'aria-label': 'search', ...params.inputProps }}
          />
        </Search>
      )}
      renderOption={(props, option) => (
        <Box
          component='li'
          {...props}
          key={option.id}
          onClick={() => onOptionClick(option.id)}
        >
          {option.name}
        </Box>
      )}
    />
  );
}

export default SearchInput;
