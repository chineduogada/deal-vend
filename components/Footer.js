import { Box, Flex, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import {
  GrFacebook,
  GrTwitter,
  GrInstagram,
  GrLinkedin,
  GrServices,
} from "react-icons/gr";
import { FcAbout, FcBusinessman } from "react-icons/fc";
import { GiSellCard } from "react-icons/gi";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";

import Brand from "./Brand";

const data = [
  {
    title: "Join us on",
    items: [
      { text: "Facebook", icon: <GrFacebook /> },
      { text: "Twitter", icon: <GrTwitter /> },
      { text: "Instagram", icon: <GrInstagram /> },
      { text: "LinkedIn", icon: <GrLinkedin /> },
    ],
  },
  {
    title: "About us",
    items: [
      { text: "Read About us", icon: <FcAbout /> },
      { text: "Terms and conditions", icon: <GoLaw /> },
      { text: "Privacy policy", icon: <RiGitRepositoryPrivateLine /> },
    ],
  },
  {
    title: "make money on Deal-Vend",
    items: [
      { text: "Sell on Deal-Vend", icon: <GiSellCard /> },
      { text: "Become a Sales Consultant", icon: <FcBusinessman /> },
      {
        text: "Become a Deal-Vendor Service Provider",
        icon: <GrServices />,
      },
      {
        text: "Become a Logistics Service Partners",
        icon: <FaHandshake />,
      },
    ],
  },
];

const Footer = () => {
  return (
    <Box bg="#333" color="gray.100" pb={5} rounded="md">
      <Box p={2} pb={4} bg="#222">
        <Brand />
      </Box>

      <Flex p={2} wrap="wrap">
        {data.map((list, index) => (
          <Box
            flex="1"
            key={index}
            mb={7}
            minW={200}
            textAlign={{ base: "center", md: "left" }}
          >
            <Heading as="h3" fontSize="sm" mb={3} textTransform="uppercase">
              {list.title}
            </Heading>
            <List spacing={1}>
              {list.items.map((item, idx) => (
                <ListItem fontSize="sm" key={idx}>
                  <ListIcon fontSize="lg">{item.icon}</ListIcon>
                  {item.text}
                </ListItem>
              ))}
            </List>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Footer;
