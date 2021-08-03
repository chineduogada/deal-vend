import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Input,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import Layout from "components/Layout";
import { Link } from "components/Link";
import useToast from "hooks/useToast";
import http, { signup } from "utils/http";

const MiniSection = ({ heading, children, ...rest }) => (
  <Box {...rest} as="section" pos="relative">
    <Heading as="h1" size="md" textAlign="center" color="green.500" mb={10}>
      {heading}
    </Heading>

    {children}
  </Box>
);

const SignupPage = () => {
  const toast = useToast();
  const router = useRouter();
  const redirectTo = router.query.redirectTo || "/";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  let isMount = true;
  let timeoutId = useRef();

  useEffect(() => {
    return () => {
      isMount = false;
      clearTimeout(timeoutId.current);
    };
  }, []);

  const handleInputType = ({ target: { value, id } }) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await signup(formData);

      if (isMount) {
        setLoading(false);
        setSuccess(true);

        toast.display({
          description: "Successfully created an account",
          status: "success",
          duration: 1500,
        });

        timeoutId.current = setTimeout(() => router.replace(redirectTo));
      }
    } catch (error) {
      if (isMount) {
        setLoading(false);

        toast.display({
          description: error.message.includes("confirmPassword")
            ? "ConfirmPassword must match Password"
            : error.message,
        });
      }
    }
  };

  return (
    <Layout>
      <Box minH="70vh">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          columnGap={10}
          py={10}
        >
          <MiniSection heading="Create your customer account">
            <Box as="form" onSubmit={handleSubmit} minH="300px">
              <Input
                placeholder="Full name"
                id="name"
                value={formData.name}
                onChange={handleInputType}
                mb={5}
              />
              <Input
                placeholder="E-mail"
                id="email"
                type="email"
                value={formData.email}
                onChange={handleInputType}
                mb={5}
              />
              <Input
                placeholder="Password"
                id="password"
                type="password"
                value={formData.password}
                onChange={handleInputType}
                mb={5}
              />
              <Input
                placeholder="Confirm password"
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputType}
              />

              <Button
                pos={{ base: "relative", md: "absolute" }}
                mt={{ base: 10, md: 0 }}
                left={0}
                bottom={0}
                w="100%"
                colorScheme="green"
                type="submit"
                disabled={loading || success}
              >
                {(loading || success) && <Spinner mr={2} />}
                {success ? "REDIRECTING..." : "CREATE ACCOUNT"}
              </Button>

              <Flex
                justifyContent="center"
                d={{ base: "block", md: "none" }}
                color="green.500"
                my={5}
              >
                <Link href={`/auth/login?redirectTo=${redirectTo}`}>
                  Already have an account?
                </Link>
              </Flex>
            </Box>
          </MiniSection>

          <MiniSection
            d={{ base: "none", md: "block" }}
            heading="Login your account"
            borderLeft="1px"
            borderColor="gray.100"
          >
            <Text>
              Login your existing Dealvend customer account in just a few
              clicks! You can login using your e-mail address
            </Text>

            <Box pos="absolute" bottom={0} w="100%">
              <Link href={`/auth/login?redirectTo=${redirectTo}`} mute>
                <Button w="100%" colorScheme="blackAlpha" type="submit">
                  LOGIN EXISTING ACCOUNT
                </Button>
              </Link>
            </Box>
          </MiniSection>
        </Grid>
      </Box>
    </Layout>
  );
};

export default SignupPage;
