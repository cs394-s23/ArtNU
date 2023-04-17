import { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function SignUp() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        user.updateProfile({
          displayName: `${firstName} ${lastName}`
        }).then(() => {
          console.log('User created successfully:', user);
        }).catch((error) => {
          console.error('Error updating user profile:', error);
        });
      })
      .catch((error) => {
        console.error('Error creating user:', error);
      });
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 3 }}>
      <form onSubmit={handleSubmit}>
        <Box sx={{ display: 'flex' }}>
          <TextField
            label="First Name"
            variant="outlined"
            margin="normal"
            value={firstName}
            onChange={(event) => setFirstName(event.target.value)}
            sx={{ flexGrow: 1, mr: 1 }}
          />
          <TextField
            label="Last Name"
            variant="outlined"
            margin="normal"
            value={lastName}
            onChange={(event) => setLastName(event.target.value)}
            sx={{ flexGrow: 1 }}
          />
        </Box>
        <TextField
          label="Email"
          variant="outlined"
          margin="normal"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          fullWidth
        />
        <TextField
          label="Password"
          variant="outlined"
          margin="normal"
          type="password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          fullWidth
        />
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Sign Up
        </Button>
      </form>
    </Box>
  );
}

export default SignUp;
