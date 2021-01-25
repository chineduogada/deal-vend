import { Flex } from "@chakra-ui/react";
import { BsStarFill, BsStarHalf, BsStar } from "react-icons/bs";
import createRange, { createRangeLite } from "../utils/createRange";

const Rating = ({ value: rating }) => {
  // splits the rating into an Array
  const ratingSlitted = `${rating}`.split(".");
  let ratingSolid = Number(ratingSlitted[0]);
  let ratingHalf = Number(ratingSlitted[1]);

  // checks if the rating's remainder is greater than 5
  ratingHalf = ratingHalf >= 5 ? ratingHalf : 0;

  let ratingRemaining = [];
  let ratingDifference = 0;

  // checks for the ratings difference from 5
  if (ratingHalf) {
    ratingDifference = 5 - Math.round(Number(`${ratingSolid}.${ratingHalf}`));
  } else {
    ratingDifference = 5 - ratingSolid;
  }

  // create Array base on the remaining ratings
  ratingRemaining = createRangeLite(ratingDifference);
  // create Array base on the solid ratings
  ratingSolid = createRange(ratingSolid);

  return (
    <Flex>
      {ratingSolid.map((_, i) => (
        <BsStarFill key={i} color="teal" />
      ))}

      {ratingHalf ? <BsStarHalf color="teal" /> : null}

      {ratingRemaining.map((_, i) => (
        <BsStar key={i} color="teal" />
      ))}
    </Flex>
  );
};

export default Rating;
