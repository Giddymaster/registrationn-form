import {
  Container,
  Typography,
  Paper,
  Box,
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  FormControl,
  FormControlLabel,
  InputLabel,
  OutlinedInput,
  Checkbox,
  Link,
  Button,
} from "@mui/material";
import { useState } from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";

const RegistrationPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} sx={{ marginTop: 8, padding: 4 }}>
        <Typography component="h1" variant="h5">
          Registration Form
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid>
            <TextField
              autoComplete="given-name"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
            />

            <TextField
              required
              fullWidth
              id="lastName"
              label="Last Name"
              autoComplete="family-name"
              margin="normal"
            />

            <TextField
              required
              fullWidth
              id="email"
              label="Email Address"
              autoComplete="email"
              margin="normal"
            />
            <FormControl fullWidth required margin="normal" variant="outlined">
              <InputLabel htmlFor="password">Password</InputLabel>
              <OutlinedInput
                id="password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => setShowPassword(!showPassword)}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
                autoComplete="new-password"
              />
            </FormControl>

            <FormControl fullWidth required margin="normal" variant="outlined">
              <InputLabel htmlFor="confirmPassword">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() =>
                        setShowConfirmPassword(!showConfirmPassword)
                      }
                      edge="end"
                    >
                      {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Confirm Password"
              />
            </FormControl>

            <FormControlLabel
              control={<Checkbox color="primary" />}
              label={
                <Typography>
                  I agree to the{" "}
                  <Link href="#" variant="body2">
                    Terms and Conditions
                  </Link>
                </Typography>
              }
            />

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Register
            </Button>
          </Grid>
        </Box>
      </Paper>
    </Container>
  );
};

export default RegistrationPage;
