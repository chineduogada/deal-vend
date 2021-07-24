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
import { login } from "utils/http";
import useAuth from "hooks/useAuth";

const ProfilePage = () => {
  const auth = useAuth();
  const toast = useToast();
  const router = useRouter();

  return (
    <Layout>
      <Box minH="70vh">
        <Heading>{auth.me?.name}</Heading>
      </Box>
    </Layout>
  );
};

export default ProfilePage;
