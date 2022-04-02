import React from 'react';

const SignUpView = () => {
  return (
    <>
      <h1>Зареєструватися</h1>
      <form
        // onSubmit={handleSubmit}
        // style={styles.form}
        autoComplete="off"
      >
        <label
        // style={styles.label}
        >
          Name
          <input
            type="text"
            name="name"
            // value={name} onChange={handleChange}
          />
        </label>

        <label
        // style={styles.label}
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
        // style={styles.label}
        >
          Password
          <input
            type="password"
            name="password"
            // value={password}
            // onChange={handleChange}
          />
        </label>

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
};
export default SignUpView;
