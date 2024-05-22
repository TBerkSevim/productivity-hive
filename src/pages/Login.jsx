import { Box, Button, Input, VStack, useToast, Alert, AlertIcon } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const navigate = useNavigate();
  const toast = useToast();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [showSuccess, setShowSuccess] = useState(false);

  const handleLogin = () => {
    if (username === "berk" && password === "1234") {
      localStorage.setItem("isAuthenticated", "true");
      setShowSuccess(true);
      navigate("/dashboard");
    } else {
      toast({
        title: "Authentication failed.",
        description: "Please check your username and password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
      <VStack spacing={4} width="300px">
        {showSuccess && (
          <Alert status="success">
            <AlertIcon />
            Login successful! Redirecting to dashboard...
          </Alert>
        )}
        <Input placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <Button onClick={handleLogin} colorScheme="teal" width="100%">
          Log In
        </Button>
      </VStack>
    </Box>
  );
}

export default Login;
