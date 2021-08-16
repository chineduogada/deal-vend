import { Box, Flex } from "@chakra-ui/layout";
import { Heading, Input, Stack } from "@chakra-ui/react";
import { useToast } from "@chakra-ui/toast";
import { Avatar } from "components/Image";
import Layout from "components/Layout";
import useAuth from "hooks/useAuth";
import useForm from "hooks/useForm";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { BsGear } from "react-icons/bs";
import http, { changeMyPassword, updateMe } from "utils/http";
import { Loader } from "components/Feedback";
import Head from "next/head";

// const pageSEO = buildSEO("Edit Profile", "...");
// const breadcrumb = [
//   { text: "My Profile", link: "/account" },
//   { text: "Edit Account" },
// ];

const MiniSection = ({ children, p, pt, ...rest }) => (
  <Box maxW="768px" mx="auto" p={p} pt={pt} mb={0} pos="relative" {...rest}>
    {children}
  </Box>
);

const Form = ({
  doSubmit,
  initialFieldsProps,
  successToast = "Successfully updated.",
  submitBtnText,
}) => {
  const {
    formProps,
    handleType,
    fieldsProps,
    renderSubmitBtn,
    formSubmitState,
  } = useForm({ doSubmit, initialFieldsProps });
  const toast = useToast();

  useEffect(() => {
    if (formSubmitState.hasSubmitError) {
      toast({
        description: formSubmitState.hasSubmitError.includes("confirmPassword")
          ? "ConfirmPassword must match Password"
          : formSubmitState.hasSubmitError,
        status: "error",
        duration: 3 * 1000,
        position: "top",
      });
    }

    if (formSubmitState.hasSubmitted) {
      toast({
        description: successToast,
        status: "success",
        duration: 3 * 1000,
        position: "top",
      });
    }
  }, [
    formSubmitState.hasSubmitted,
    formSubmitState.hasSubmitError,
    successToast,
  ]);

  return (
    <Box as="form" {...formProps}>
      <Stack
        spacing={4}
        py={5}
        bg="white"
        rounded="md"
        mb={5}
        p={{ base: 2, md: 5 }}
        shadow="lg"
      >
        {fieldsProps.map((field) => (
          <Input key={field.id} {...field} onChange={handleType} />
        ))}
      </Stack>

      <Flex justifyContent="flex-end">
        {renderSubmitBtn({
          text: submitBtnText,
          colorScheme: "green",
          leftIcon: <BsGear />,
        })}
      </Flex>
    </Box>
  );
};

const ProfileSettingPage = () => {
  const router = useRouter();
  const auth = useAuth();
  const { me } = auth;

  const forms = {
    personalInfo: {
      formFields: [
        {
          id: "name",
          placeholder: "John Doe",
          value: me?.name,
        },
        {
          id: "Email",
          placeholder: "example@email.com",
          value: me?.email,
          disabled: true,
        },
      ],
      doSubmit: async (fieldsObj) => {
        await updateMe({ name: fieldsObj.name });

        await auth.handleFetchCurrentUser();
        router.reload();
      },
    },

    password: {
      formFields: [
        {
          id: "currentPassword",
          placeholder: "Current Password",
          type: "password",
        },
        {
          id: "newPassword",
          placeholder: "New Password",
          type: "password",
        },
        {
          id: "confirmPassword",
          placeholder: "Confirm Password",
          type: "password",
        },
      ],
      doSubmit: async (fieldsObj) => {
        await changeMyPassword(fieldsObj);
      },
    },
  };

  useEffect(() => {
    if (!auth.me) router.replace("/auth/login?redirectTo=/profile");
  }, [auth.me]);

  return (
    <Layout
    // SEO={pageSEO} breadcrumb={breadcrumb}
    >
      <Head>
        <title>Edit Profile - Deal Vend</title>
      </Head>

      {auth.me ? (
        <>
          <MiniSection p={{ base: 4, md: 10 }} pt={0}>
            <Flex
              flexDir="column"
              textAlign="center"
              alignItems="center"
              mb={5}
            >
              <Avatar lg />
            </Flex>

            <Form
              initialFieldsProps={forms.personalInfo.formFields}
              doSubmit={forms.personalInfo.doSubmit}
              submitBtnText="Update Personal Info"
            />

            {/* </Box> */}
          </MiniSection>

          <MiniSection p={{ base: 4, md: 10 }}>
            <Form
              initialFieldsProps={forms.password.formFields}
              doSubmit={forms.password.doSubmit}
              submitBtnText="Change Password"
            />
          </MiniSection>
        </>
      ) : (
        <Loader />
      )}
    </Layout>
  );
};

export default ProfileSettingPage;
