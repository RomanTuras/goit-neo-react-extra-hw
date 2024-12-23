const HomePage = () => {
  const styles = {
    container: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      marginTop: '150px',
      fontWeight: 500,
      fontSize: 48,
      textAlign: 'center',
    },
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Greeting in My Contacts App 💁‍♀️</h1>
    </div>
  );
};

export default HomePage;
