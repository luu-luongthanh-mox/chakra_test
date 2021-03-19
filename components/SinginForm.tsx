// Import FirebaseAuth and firebase.
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import firebase from "firebase";
import { useAuth } from "Context/AuthContext";
import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
} from "@chakra-ui/react";
import { Form, Formik } from "formik";

interface FormValue {
  email: string;
  password: string;
  repassword?: string;
}
const initForm: FormValue = { email: "", password: "", repassword: "" };

export const SigninForm = () => {
  const router = useRouter();
  const { signin, signup } = useAuth();
  const [errorMessage, setErrorMessage] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const validate = (values: FormValue) => {
    const errors = {} as FormValue;
    if (!values.email) {
      errors.email = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
    }
    if (isSignup && values.repassword !== values.password) {
      errors.repassword = "Password and re-enter password much the same";
    }
    return errors;
  };

  const onSubmit = (values: FormValue, actions: any) => {
    setErrorMessage("");
    const submitFn = isSignup ? signup : signin;
    submitFn(values.email, values.password)
      .catch((e) => {
        setErrorMessage(e?.message);
        actions.setSubmitting(false);
      })
      .then(() => {
        router.push("/");
      });
  };

  const toggleSingup = () => {
    setIsSignup(!isSignup);
  };

  return (
    <Center h="100vh">
      <Container maxW="container.sm" centerContent>
        <Formik initialValues={initForm} validate={validate} onSubmit={onSubmit}>
          {({ errors, touched, handleChange, handleBlur, handleSubmit, values, isSubmitting }) => (
            <Box borderRadius="lg" borderWidth="1px">
              <Box p="6">
                <Form onSubmit={handleSubmit}>
                  <Stack spacing={3} w="container.sm">
                    <Heading textAlign="center">{isSignup ? "Sign up" : "Sign In"}</Heading>
                    <FormControl isInvalid={!!errors.email && !!touched.email}>
                      <FormLabel htmlFor="email">Email</FormLabel>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        id="email"
                        placeholder="Email"
                      />
                      <FormErrorMessage>{errors.email}</FormErrorMessage>
                    </FormControl>
                    <FormControl isInvalid={!!errors.password && !!touched.password}>
                      <FormLabel htmlFor="password">Password</FormLabel>
                      <Input
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.password}
                        id="password"
                        placeholder="Password"
                        type="password"
                      />
                      <FormErrorMessage>{errors.password}</FormErrorMessage>
                    </FormControl>
                    {isSignup && (
                      <FormControl isInvalid={!!errors.repassword}>
                        <FormLabel htmlFor="repassword">Re-enter Password</FormLabel>
                        <Input
                          onChange={handleChange}
                          onBlur={handleBlur}
                          value={values.repassword}
                          id="repassword"
                          placeholder="Re-enter password"
                          type="password"
                        />
                        <FormErrorMessage>{errors.repassword}</FormErrorMessage>
                      </FormControl>
                    )}
                    <FormControl isInvalid={!!errorMessage}>
                      <FormErrorMessage>{errorMessage}</FormErrorMessage>
                    </FormControl>
                    <Button mt={4} colorScheme="teal" isLoading={isSubmitting} type="submit">
                      Submit
                    </Button>
                    <Link textAlign="center" color="teal.500" onClick={toggleSingup}>
                      {isSignup ? "Sign in" : "Sign up"}
                    </Link>
                  </Stack>
                </Form>
              </Box>
            </Box>
          )}
        </Formik>
      </Container>
    </Center>
  );
};
