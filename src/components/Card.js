import {Heading, HStack, Image, Text, VStack} from "@chakra-ui/react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight} from "@fortawesome/free-solid-svg-icons";
import React from "react";

// Implement the UI for the Card component according to the instructions.
// You should be able to implement the component with the elements imported above.
// Feel free to import other UI components from Chakra UI if you wish to.

const Card = ({title, description, imageSrc, name}) => {
  return (
    <VStack
      backgroundColor={"white"}
      color={"black"}
      borderRadius={10}
      alignItems={"start"}
      paddingBottom={5}
      >
      <VStack>
        <Image
          src={imageSrc}
          alt={title}
          borderRadius={10}
          width={'100%'}
        />
      </VStack>
      <VStack
      alignItems={"start"} 
      marginLeft={'3%'}
      marginRight={'3%'}
      >
        <Heading as='h3' size={'lg'} margin={"10px 0"} >{title}</Heading>
        <Text color={"#65758c"}>{description}</Text>
      </VStack>
      <a title={name} href={`#${name}`} style={{marginLeft: '3%'}}>
      <HStack alignItems={"center"} fontWeight={"medium"}>
        <span>See more</span>
        <FontAwesomeIcon
          icon={faArrowRight}
          size="1x"
        />
      </HStack>
      </a>
    </VStack>
  );
};

export default Card;
