import { useState, Fragment } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const EditContactDialog = ({ id, name, number, saveChanges }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Fragment>
      <IconButton aria-label="delete" color="primary" onClick={handleClickOpen}>
        <EditIcon />
      </IconButton>
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
              id,
              name: formJson.name.trim(),
              number: formJson.number.trim(),
            };
            saveChanges(contact);
            handleClose();
          },
        }}
      >
        <DialogTitle>Edit contact</DialogTitle>
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
            defaultValue={name}
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
            defaultValue={number}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button type="submit">Save changes</Button>
        </DialogActions>
      </Dialog>
    </Fragment>
  );
};

export default EditContactDialog;
