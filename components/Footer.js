import { Box, Flex, Heading, List, ListItem, ListIcon } from "@chakra-ui/react";
import {
  GrFacebook,
  GrInstagram,
  GrLinkedin,
  GrServices,
} from "react-icons/gr";
import { FcAbout, FcBusinessman } from "react-icons/fc";
import { GiSellCard } from "react-icons/gi";
import { RiGitRepositoryPrivateLine } from "react-icons/ri";
import { GoLaw } from "react-icons/go";
import { FaHandshake } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

import Brand from "./Brand";
import { Link } from "./Link";
import { AiOutlinePhone, AiOutlineWhatsApp } from "react-icons/ai";

const data = [
  {
    title: "Join us on",
    items: [
      {
        text: "Gmail",
        href: "mailto:chineduogada@gmail.com",
        icon: <SiGmail />,
      },
      {
        text: "Facebook",
        href: "https://www.facebook.com/chineduogada2000/",
        icon: <GrFacebook />,
      },
      {
        text: "Instagram",
        href: "https://www.instagram.com/richcode.js/",
        icon: <GrInstagram />,
      },
      {
        text: "Linkedin",
        href: "https://www.linkedin.com/in/stanley-ogada-22527b19a/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3B0UNqbNxSTBa6uufn5HBRkQ%3D%3D",
        icon: <GrLinkedin />,
      },
      {
        text: "WhatsApp",
        href: "https://api.whatsapp.com/send?phone=+2348077917051",
        icon: <AiOutlineWhatsApp />,
      },
      {
        text: "Phone",
        href: "tel:+2348077917051",
        icon: <AiOutlinePhone />,
      },
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

const renderText = (item) => (
  <>
    <ListIcon fontSize="lg">{item.icon}</ListIcon>
    {item.text}
  </>
);

const Footer = ({ ...rest }) => {
  return (
    <Box as="footer" pb={3}>
      <Box
        bg="#333"
        color="gray.100"
        pb={5}
        rounded="md"
        overflow="hidden"
        mt={3}
        {...rest}
      >
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
                {list.items.map((item, index) => (
                  <ListItem fontSize="sm" key={index}>
                    {item.href ? (
                      <Link href={item.href}>{renderText(item)}</Link>
                    ) : (
                      renderText(item)
                    )}
                  </ListItem>
                ))}
              </List>
            </Box>
          ))}
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
