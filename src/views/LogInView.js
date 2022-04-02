import React from 'react';

const styles = {
  form: {
    width: 320,
  },
  label: {
    display: 'flex',
    flexDirection: 'column',
    marginBottom: 15,
  },
};

const LogInView = () => {
  return (
    <>
      <h1>Ввійти в свій обліковий запис</h1>
      <form
              // onSubmit={handleSubmit} 
              style={styles.form}
        autoComplete="off"
      >
        <label
        style={styles.label}
        >
          Email
          <input
            type="email"
            name="email"
            // value={email}
            // onChange={handleChange}
          />
        </label>

        <label
        style={styles.label}
        >
          Password
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
          />
        </label>

        <button type="submit">Log In</button>
      </form>
    </>
  );
};
export default LogInView;
