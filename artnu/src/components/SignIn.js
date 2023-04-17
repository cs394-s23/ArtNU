import { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { AuthContext } from './AuthContext';
import { useContext } from 'react';

const auth = getAuth();

function SignIn() {
    const { authUser, userSignedIn, setAuthUser, setUserSignedIn } = useContext(AuthContext);

    console.log(userSignedIn)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
  
    const handleSignIn = (event) => {
        event.preventDefault();
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            // setUserSignedIn(true)
            setError(null);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorMessage);
          });
    };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 8, p: 3 }}>
      <form onSubmit={handleSignIn}>
        <TextField
          label="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          fullWidth
          margin="normal"
          required
        />
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <Button variant="contained" color="primary" type="submit" fullWidth>
          Sign In
        </Button>
      </form>
    </Box>
  );
}

export default SignIn;
