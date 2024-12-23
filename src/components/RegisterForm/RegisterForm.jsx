import { Field, Form, Formik, ErrorMessage } from 'formik';
import css from './RegisterForm.module.css';
import * as yup from 'yup';
import { nanoid } from 'nanoid';
import { useDispatch, useSelector } from 'react-redux';
import { register } from '../../redux/auth/operations.js';
import { Box, Button, CircularProgress, Paper, TextField, Typography } from '@mui/material';
import { selectIsRefreshing, selectIsRegisterError } from '../../redux/auth/selectors.js';
import ErrorAuthMessage from '../ErrorAuthMessage/ErrorAuthMessage.jsx';

const initialValues = {
  name: '',
  email: '',
  password: '',
};

const RegisterSchema = yup.object().shape({
  name: yup
    .string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  email: yup.string().email().required('Required'),
  password: yup
    .string()
    .min(7, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
});

const RegisterForm = () => {
  const dispatch = useDispatch();
  const nameFieldId = nanoid();
  const emailFieldId = nanoid();
  const passwordFieldId = nanoid();
  const isRegisterError = useSelector(selectIsRegisterError);
  const isRefreshing = useSelector(selectIsRefreshing);

  const handleSubmit = (values, actions) => {
    dispatch(register({ ...values }));
    actions.resetForm();
  };

  return (
    <Paper
      elevation={3}
      style={{ width: '350px', padding: '40px', margin: '60px auto 0' }}
    >
      <Typography variant="h6" color="primary">
        Register
      </Typography>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
        validationSchema={RegisterSchema}
      >
        <Form className={css.contactForm}>
        <Field
            id={nameFieldId}
            as={TextField}
            required
            autoFocus
            variant="standard"
            label="Name"
            margin="dense"
            type="text"
            name="name"
            className={css.formField}
          />
          <ErrorMessage name="name" className={css.error} component="span" />

          <Field
            id={emailFieldId}
            as={TextField}
            required
            variant="standard"
            label="E-mail"
            margin="dense"
            type="email"
            name="email"
            className={css.formField}
          />
          <ErrorMessage name="email" className={css.error} component="span" />

          <Field
            id={passwordFieldId}
            as={TextField}
            type="password"
            name="password"
            required
            margin="dense"
            label="password"
            variant="standard"
            className={css.formField}
          />
          <ErrorMessage
            name="password"
            className={css.error}
            component="span"
          />
          {isRegisterError && <ErrorAuthMessage>Registration error!</ErrorAuthMessage>}
          

          <Box sx={{ m: 1, position: 'relative', margin: '40px auto 0' }}>
            <Button
              variant="contained"
              type="submit"
              disabled={isRefreshing}
              color="primary"
            >
              Accept terms
            </Button>
            {isRefreshing && (
              <CircularProgress
                size={24}
                sx={{
                  color: 'blue',
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: '-12px',
                  marginLeft: '-12px',
                }}
              />
            )}
          </Box>
        </Form>
      </Formik>
    </Paper>
  );
};

export default RegisterForm;
