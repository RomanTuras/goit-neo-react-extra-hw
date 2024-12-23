import css from './ErrorAuthMessage.module.css';

const ErrorAuthMessage = ({ children }) => {
  return <p className={css.errorMessage}>{children}</p>;
};

export default ErrorAuthMessage;
