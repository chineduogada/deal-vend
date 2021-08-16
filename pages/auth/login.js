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
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Layout from "components/Layout";
import { Link } from "components/Link";
import useToast from "hooks/useToast";
import http, { login } from "utils/http";
import useAuth from "hooks/useAuth";
import Head from "next/head";

const MiniSection = ({ heading, children, ...rest }) => (
  <Box {...rest} as="section" pos="relative">
    <Heading as="h1" size="md" textAlign="center" color="green.500" mb={10}>
      {heading}
    </Heading>

    {children}
  </Box>
);

const LoginPage = () => {
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();
  const redirectTo = router.query.redirectTo || "/";

  const [formData, setFormData] = useState({ email: "", password: "" });

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

      await login(formData);
      await auth.handleFetchCurrentUser();

      if (isMount) {
        setLoading(false);
        setSuccess(true);

        toast.display({
          description: "Successfully logged in",
          status: "success",
          duration: 1500,
        });

        timeoutId.current = setTimeout(() => router.replace(redirectTo));
      }
    } catch (error) {
      if (isMount) {
        setLoading(false);

        toast.display({
          description: error.message,
        });
      }
    }
  };

  return (
    <Layout>
      <Head>
        <title>Login - Deal Vend</title>
      </Head>

      <Box minH="70vh">
        <Grid
          templateColumns={{ base: "1fr", md: "1fr 1fr" }}
          columnGap={10}
          py={10}
        >
          <MiniSection heading="Login your account">
            <Box as="form" onSubmit={handleSubmit} minH="220px">
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
                {success ? "REDIRECTING..." : "LOGIN"}
              </Button>

              <Flex
                justifyContent="center"
                d={{ base: "block", md: "none" }}
                color="green.500"
                my={5}
              >
                <Link href={`/auth/signup?redirectTo=${redirectTo}`}>
                  Don't have an account?
                </Link>
              </Flex>
            </Box>
          </MiniSection>

          <MiniSection
            d={{ base: "none", md: "block" }}
            heading="Create your DealVend account"
            borderLeft="1px"
            borderColor="gray.100"
          >
            <Text>
              Create your Dealvend customer account in just a few clicks! You
              can register for absolutely free using your e-mail address
            </Text>

            <Box pos="absolute" bottom={0} w="100%">
              <Link href={`/auth/signup?redirectTo=${redirectTo}`} mute>
                <Button w="100%" colorScheme="blackAlpha" type="submit">
                  REGISTER VIA EMAIL
                </Button>
              </Link>
            </Box>
          </MiniSection>
        </Grid>
      </Box>
    </Layout>
  );
};

export default LoginPage;
