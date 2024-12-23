import { useState, Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Fab } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const AddContactDialog = ({ contactAdd }) => {
  const [open, setOpen] = useState(false);
  const [nameError, setNameError] = useState('');
  const [numberError, setNumberError] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setNameError('');
    setNumberError('');
  };

  const isValidate = contact => {
    let isError = false;
    if (contact.name.length < 3 || contact.name.length > 30) {
      setNameError('Input from 3 to 30 characters');
      isError = true;
    }

    if (contact.number.length < 3 || contact.number.length > 30) {
      setNumberError('Input from 3 to 30 characters');
      isError = true;
    }
    return !isError;
  };

  return (
    <Fragment>
      <Fab
        onClick={handleClickOpen}
        color="primary"
        aria-label="add"
        style={{ position: 'absolute', bottom: 0, right: 0 }}
      >
        <AddIcon />
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: 'form',
          onSubmit: event => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const contact = {
              name: formJson.name.trim(),
              number: formJson.number.trim(),
            };
            setNameError('');
            setNumberError('');
            if (isValidate(contact)) {
              contactAdd(contact);
              handleClose();
            }
          },
        }}
      >
        <DialogTitle>Add contact</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            required
            margin="dense"
            id="name"
            name="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
            error={nameError != ''}
            helperText={nameError}
          />
          <TextField
            autoFocus
            required
            margin="dense"
            id="number"
            name="number"
            label="Phone number"
            type="text"
            fullWidth
            variant="standard"
            error={numberError != ''}
            helperText={numberError}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default AddContactDialog;
