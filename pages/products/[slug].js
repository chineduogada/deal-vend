import Image from "next/image";
import {
  Box,
  Flex,
  IconButton,
  SkeletonCircle,
  SkeletonText,
  Stack,
  Heading,
  Text,
  Badge,
  Button,
  Grid,
  GridItem,
  OrderedList,
  ListItem,
  List,
  ListIcon,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsHeart } from "react-icons/bs";
import { MdStars } from "react-icons/md";
import { FaBoxOpen, FaCartPlus, FaChevronRight, FaTimes } from "react-icons/fa";
import Layout from "../../components/Layout";
import Rating from "../../components/Rating";
import fetcher from "../../utils/fetcher";
import truncate from "../../utils/truncate";
import calcDiscountPrice from "../../utils/calcDiscountPrice";
import formatPrice from "../../utils/formatPrice";
import Gallery from "../../components/Gallery";
import TipAbout from "../../components/TipAbout";

const details = [
  {
    title: "Bigger ROM , More Storage",
    description:
      "Featured with 32GB ROM/2GB RAM there is more space for you to store your favourite memories and important files. Less worry of frequent clean-up to get more space. Practical and excellent as always.",
  },
  {
    title: "More View, More Fun",
    description:
      "POP4 comes with stunning 6” FW+ IPS screen that brings you wider viewing area. With perfect screen ratio and clear resolution, you could browse more contents with less scrolling and touch more fun. Come and explore more wonderful through POP4.",
  },
  {
    title: "Long-lasting 5000mAh Battery , Stay Active",
    description:
      "Equipped with 5000mAh battery, your needs of power supply for daily work and life could be easily satisfied. More time to enjoy chatting with friends, taking selfies, playing games, or browsing websites as you like. Less worry of low battery and frequent recharging. With POP4, always stay active.",
  },
  {
    title: "Capture Your Shining Moments",
    description:
      "Adopting 8MP AI Selfie Camera with Flash/5MP REAR CAMERA WITH DUAL FLASH, selfies taken by POP4 would be clearer, brighter and more charming. No more worries of different scenarios, you could always capture glamorous selfies. 7 levels beauty mode are used to give natural retouch to your pictures. No need to go to make-up artist, AI beauty mode does professional beautification for you. Come and record more shining moments with POP4",
  },
  {
    title: "More Secure and Considerate Unlocking Smart Fingerprint",
    description:
      "Unlock your phone instantly with just a single touch. Equipped with smart fingerprint sensor, POP4 gives you multiple security and privacy protection after you record your fingerprint information and start the function. Not only unlock your phone, you could also take photo, record calling, accept calling, dismiss alarm through the intelligent fingerprint sensor.",
  },
  {
    title: "Face Unlock 2.0",
    description:
      'Unlock your phone speedily via "face scan". With the newly added “Closed-Eyes Detection”on Face Unlock 2.0 version, less worry of unlocking your phone when you are sleeping or closing your eyes. The 2.0 version also offers screen fill-light in dark environment, more quickly unlock in low light scenarios. OPERATING SYSTEM ; ANDROID Q(Go edition), DISPLAY: 6" FW+ IPS SCREEN; PROCESSOR; 1.3GHZ QUAD CORE; NETWORK; GSM/GPRS/FULL EDGE/WCDMA, DIMENSION; 160*77.25*9.5MM, RESOLUTION; 480*960, MEMORY; 32GB ROM/2GB RAM, CONNECTIVITY;GPS,WIFI,BT,FM, CAMEARA ; 8MP FRONT CAMERA WITH FLASH/5MP REAR CAMERA WITH DUAL FLASH, SENSOR;G-SENSOR, AMBIENT LIGHT SENSOR,PROXIMITY SENSOR,FINGERPRINT SENSOR, FACE UNLOCK, BATTERY CAPACITY; 5000MAH',
  },
];

const moreAbout = [
  {
    title: "key features",
    values: [
      { key: "color", value: "black" },
      { key: "color", value: "black" },
      { key: "color", value: "black" },
      { key: "color", value: "black" },
      { key: "color", value: "black" },
    ],
  },
  {
    title: "specifications",
    values: [
      { key: "weight(kg)", value: "1" },
      { key: "model", value: "windows 10" },
      { key: "weight(kg)", value: "1" },
      { key: "model", value: "windows 10" },
      { key: "weight(kg)", value: "1" },
      { key: "model", value: "windows 10" },
      { key: "weight(kg)", value: "1" },
      { key: "model", value: "windows 10" },
      { key: "weight(kg)", value: "1" },
      { key: "model", value: "windows 10" },
      { key: "weight(kg)", value: "1" },
      { key: "model", value: "windows 10" },
      { key: "weight(kg)", value: "1" },
      { key: "model", value: "windows 10" },
      { key: "weight(kg)", value: "1" },
      { key: "model", value: "windows 10" },
    ],
  },
];

const WhatInTheBox = [
  { amount: 1, name: "hard case cover" },
  { amount: 2, name: "ear pud" },
  { amount: 1, name: "hard case cover" },
  { amount: 2, name: "ear pud" },
  { amount: 1, name: "hard case cover" },
  { amount: 2, name: "ear pud" },
  { amount: 1, name: "hard case cover" },
  { amount: 2, name: "ear pud" },
];

const Wrapper = ({
  renderGallery,
  children,
  renderAside,
  renderHeaderDetail,
}) => (
  <Flex>
    <Stack spacing={2} flex="1" mr={4}>
      <Flex bg="white" rounded="md" boxShadow="lg" p={2}>
        <Flex minW={180} justifyContent="center" rounded="md">
          {renderGallery}
        </Flex>

        <Box ml={2} flex="1">
          {renderHeaderDetail}
        </Box>
      </Flex>

      {children}
    </Stack>

    <Box w="230px">{renderAside}</Box>
  </Flex>
);

const Product = ({ product }) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return (
      <Layout>
        <Wrapper
          renderGallery={
            <Stack>
              <SkeletonCircle w="160px" h="160px" />

              <Flex justifyContent="space-between">
                <SkeletonCircle size={10} />
                <SkeletonCircle size={10} />
                <SkeletonCircle size={10} />
              </Flex>
            </Stack>
          }
          renderAside={
            <Box p={4} bg="white" boxShadow="lg" rounded="md">
              <SkeletonText mt="4" noOfLines={10} spacing="4" />
            </Box>
          }
          renderHeaderDetail={
            <Stack spacing="10" p={4}>
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
              <SkeletonText mt="4" noOfLines={2} spacing="4" />
            </Stack>
          }
        >
          <Box bg="white" rounded="md" boxShadow="lg" p={4}>
            <SkeletonText mt="4" noOfLines={4} spacing="4" />
          </Box>
        </Wrapper>
      </Layout>
    );
  }

  return (
    <Layout
      breadcrumbPaths={[
        { name: product.category, path: "/hi" },
        { name: product.slug, path: "/sd" },
      ]}
    >
      <Wrapper
        renderGallery={
          <Gallery
            images={[
              "/img/carousel-img-1.jpg",
              "/img/carousel-img-2.jpg",
              "/img/carousel-img-1.jpg",
              "/img/carousel-img-2.jpg",
              "/img/carousel-img-1.jpg",
            ]}
          />
        }
        renderAside={
          <Box position="sticky" top={1}>
            <Box bg="white" boxShadow="lg" rounded="md" mb={2}>
              <Flex
                justifyContent="space-between"
                alignItems="center"
                borderBottom="1px"
                borderColor="gray.300"
                p={2}
              >
                <Heading as="h5" p={2} fontSize="md" textTransform="uppercase">
                  Seller Information
                </Heading>
                <FaChevronRight />
              </Flex>

              <Flex
                p={2}
                justifyContent="space-between"
                borderBottom="1px"
                borderColor="gray.300"
              >
                <Box>
                  <Heading as="h6" fontSize="sm" mb={2}>
                    Quick Connect
                  </Heading>

                  <Text fontSize="xs">
                    <Text as="b">300</Text> Followers
                  </Text>

                  <Text fontSize="xs">
                    <Text as="b">90%</Text> Seller score
                  </Text>
                </Box>

                <Button alignSelf="flex-end">Follow</Button>
              </Flex>

              <Box p={2}>
                <Heading
                  as="h6"
                  fontSize="sm"
                  mb={2}
                  d="flex"
                  alignItems="center"
                >
                  Seller Performance
                  <TipAbout>
                    To help you decide on the best offer we have several key
                    metrics below to help you with your decision
                  </TipAbout>
                </Heading>

                <List spacing={1}>
                  <ListItem fontSize="xs">
                    <ListIcon color="green.500" fontSize="xl" mr={1}>
                      <MdStars />
                    </ListIcon>
                    Order Fulfillment Rate: <b>Good</b>
                  </ListItem>
                  <ListItem fontSize="xs">
                    <ListIcon color="green.500" fontSize="xl" mr={1}>
                      <MdStars />
                    </ListIcon>
                    Quality Score: <b>Excellent</b>
                  </ListItem>
                </List>
              </Box>
            </Box>

            <Box bg="white" boxShadow="lg" rounded="md" p={2}>
              <Flex mb={2}>
                <Box
                  width="90px"
                  rounded="md"
                  overflow="hidden"
                  height="90px"
                  flexShrink={0}
                >
                  <Image
                    src="/img/carousel-img-1.jpg"
                    width="90px"
                    height="90px"
                  />
                </Box>

                <Box flex="1" ml={1}>
                  <Heading as="h5" fontSize="md" fontWeight="400" mb={2}>
                    {truncate(
                      `${product.name} Tecno POP4 (BC2c) 6" Screen 32GB ROM + 2GB
                    RAM, 8MP/5MP Camera, Android Q (Go Edition), 5000mah - Ice
                    Lake Green`,
                      17
                    )}
                  </Heading>

                  <Box mb={4}>
                    <Heading as="h4" fontSize="lg">
                      {formatPrice(
                        "en-NG",
                        calcDiscountPrice(product.price, product.discount),
                        "NGN"
                      )}
                    </Heading>
                    <Flex alignItems="center">
                      <Text textDecor="line-through" mr={2}>
                        {formatPrice("en-NG", product.price, "NGN")}
                      </Text>
                      <Badge colorScheme="teal">- {product.discount}%</Badge>
                    </Flex>
                  </Box>
                </Box>
              </Flex>

              <Button w="100%" leftIcon={<FaCartPlus />}>
                Add to cart
              </Button>
            </Box>
          </Box>
        }
        renderHeaderDetail={
          <Box>
            <Flex justifyContent="space-between" mb={3}>
              <Heading as="h2" fontSize="2xl" fontWeight="400">
                {product.name} Tecno POP4 (BC2c) 6" Screen 32GB ROM + 2GB RAM,
                8MP/5MP Camera, Android Q (Go Edition), 5000mah - Ice Lake Green
              </Heading>
              <IconButton isRound>
                <BsHeart />
              </IconButton>
            </Flex>

            <Stack spacing={1}>
              <Text d="flex">
                Brand:
                <Text fontWeight="bold" mx={2} opacity={0.8}>
                  {product.brand || "Tecno | Similar products from Tecno"}
                </Text>
              </Text>

              <Flex
                alignItems="center"
                fontSize="sm"
                borderBottom="1px"
                borderColor="gray.300"
                mb={2}
                pb={2}
              >
                <Rating value={product.ratingsAverage} />
                <Text ml={1}>({product.ratingsQuantity || 30} ratings)</Text>
              </Flex>

              <Box mb={4}>
                <Heading as="h3" fontSize="2xl">
                  {formatPrice(
                    "en-NG",
                    calcDiscountPrice(product.price, product.discount),
                    "NGN"
                  )}
                </Heading>
                <Flex alignItems="center">
                  <Text textDecor="line-through" mr={2}>
                    {formatPrice("en-NG", product.price, "NGN")}
                  </Text>
                  <Badge colorScheme="teal">- {product.discount}%</Badge>
                </Flex>
              </Box>

              <Button w="100%" leftIcon={<FaCartPlus />}>
                Add to cart
              </Button>
            </Stack>
          </Box>
        }
      >
        {details && (
          <Box bg="white" rounded="md" boxShadow="lg">
            <Heading
              as="h5"
              borderBottom="1px"
              borderColor="gray.300"
              p={2}
              fontSize="md"
              textTransform="uppercase"
              mb={3}
            >
              Product details
            </Heading>

            <Box p={2}>
              {details.map((detail, index) => (
                <Box key={index} mb={2}>
                  <Heading as="h6" fontSize="sm">
                    {detail.title}
                  </Heading>
                  <Text fontSize="sm">{detail.description}</Text>
                </Box>
              ))}
            </Box>
          </Box>
        )}

        {moreAbout &&
          moreAbout.map((item, index) => (
            <Box flex={1} key={index} bg="white" rounded="md" boxShadow="lg">
              <Heading
                as="h5"
                borderBottom="1px"
                borderColor="gray.300"
                p={2}
                fontSize="md"
                textTransform="uppercase"
                mb={3}
              >
                {item.title}
              </Heading>

              <Grid
                templateColumns="repeat(3, 1fr)"
                columnGap={1}
                rowGap={1}
                p={2}
              >
                {item.values.map((val, index) => (
                  <GridItem d="flex" key={index} ml={3}>
                    <Text fontSize="sm">{val.key}:</Text>

                    <Text fontSize="sm" fontWeight="bold" mx={2}>
                      {val.value}
                    </Text>
                  </GridItem>
                ))}
              </Grid>
            </Box>
          ))}

        {WhatInTheBox && (
          <Box bg="white" rounded="md" boxShadow="lg">
            <Heading
              as="h5"
              borderBottom="1px"
              borderColor="gray.300"
              p={2}
              fontSize="md"
              textTransform="uppercase"
              mb={3}
              d="flex"
              justifyContent="space-between"
            >
              What is in the Box? <FaBoxOpen />
            </Heading>

            <OrderedList p={2}>
              {WhatInTheBox.map((item, index) => (
                <ListItem
                  key={index}
                  d="flex"
                  alignItems="center"
                  fontSize="sm"
                >
                  {index + 1}.
                  <Badge ml={3} d="flex" alignItems="center">
                    {item.amount} <FaTimes />
                  </Badge>
                  {item.name}
                </ListItem>
              ))}
            </OrderedList>
          </Box>
        )}
      </Wrapper>
    </Layout>
  );
};

export const getStaticProps = async (ctx) => {
  const { slug } = ctx.params;

  const {
    data: { product },
  } = await fetcher(`/products/${slug}`);

  return {
    props: {
      product,
    },
  };
};

export const getStaticPaths = async () => {
  // let data = await Promise.all([
  //   fetcher("/products/top-sales?fields=slug"),
  //   fetcher("/products/top-cheap?fields=slug"),
  //   fetcher("/products/deals-of-the-day?fields=slug"),
  //   fetcher("/products/most-searched?fields=slug"),
  // ]);

  // data = data.map(({ data }) => {
  //   data.products = data.products.map((product) => {
  //     return { params: { slug: product.slug } };
  //   });

  //   return data.products;
  // });

  // const paths = data.reduce((previous, current) => {
  //   return (previous = [...previous, ...current]);
  // }, []);

  return {
    fallback: true,
    paths: [],
  };
};

export default Product;
