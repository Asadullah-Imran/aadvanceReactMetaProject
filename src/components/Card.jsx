import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <>
      
      <Box textAlign="left" bg="white" borderRadius="15px">
        <Image src={imageSrc}  borderRadius='15px 15px 0  0 '/>
        <div style={{padding: 20}}>
        <Heading as="h3" size="md" color="black">
          {title}
        </Heading>
        <Text color="black" py='3'>{description}</Text>
        <Text color='black'fontSize='sm' px='2' >See more <FontAwesomeIcon icon={faArrowRight} size="1x"  /></Text>
        </div>
      </Box>
    </>
  );
};

export default Card;
