import {
  Box,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  IconButton,
  Input,
  Spinner,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Layout from "components/Layout";
import { Link } from "components/Link";
import useToast from "hooks/useToast";
import { login } from "utils/http";
import useAuth from "hooks/useAuth";
import { Loader } from "components/Feedback";
import { Avatar } from "components/Image";
import { BsBriefcaseFill, BsPen } from "react-icons/bs";
import Head from "next/head";

const ProfilePage = () => {
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    if (!auth.me) router.replace("/auth/login?redirectTo=/profile");
  }, [auth.me]);

  return (
    <Layout>
      <Head>
        <title>Profile - Deal Vend</title>
      </Head>

      {auth.me ? (
        <Stack alignItems="center" textAlign="center" minH="70vh" spacing={2}>
          <Box pos="relative">
            <Avatar lg />

            <Link href="/profile/edit">
              <IconButton
                fontSize="1.5rem"
                isRound
                colorScheme="green"
                pos="absolute"
                top={0}
                right={-2}
              >
                <BsPen />
              </IconButton>
            </Link>
          </Box>

          <Heading size="lg" as="h1" color="green.500">
            {auth.me.name}
          </Heading>
          <Text>{auth.me.email}</Text>

          <Flex
            rounded="full"
            border="1px"
            py={2}
            px={4}
            textTransform="uppercase"
            color="green.500"
          >
            <Icon fontSize="1.5rem">
              <BsBriefcaseFill />
            </Icon>
            <Text fontWeight={500} pl={2}>
              {auth.me.role}
            </Text>
          </Flex>
        </Stack>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default ProfilePage;
