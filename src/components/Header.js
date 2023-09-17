import React, { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    title: "Email",
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    title: "Github Account",
    icon: faGithub,
    url: "https://github.com",
  },
  {
    title: "LinkedIn Account",
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    title: "Medium Account",
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    title: "Stackoverflow Account",
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];


const Header = () => {

  const [scrollDirection, setScrollDirection] = useState(null);
  const scrollYRef = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > scrollYRef.current) {
        setScrollDirection("down");
      } else if (currentScrollY < scrollYRef.current) {
        setScrollDirection("up");
      }
      scrollYRef.current = currentScrollY;
    }
    window.addEventListener('scroll', handleScroll)
  
    return () => {
      window.removeEventListener('scroll', handleScroll);
}}, []);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };
  
  const isScrolled = () => {
    if (scrollDirection === 'up') {
      return '0';
    } else if (scrollDirection === 'down') {
      return '-200px';
    }
  }

  return (
    <Box
      ref={scrollYRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      transform={"auto"}
      translateY={isScrolled}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
            {socials.map((social, index) => {
              return (
              <a key={index} title={social.title} href={social.url}>
                <FontAwesomeIcon icon={social.icon} size="2x" />
              </a>
            )})}
            {/* Add social media links based on the `socials` data */}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a id="projects" href="/#projects" onClick={handleClick('projects')}>Projects</a>
              <a id="contactme" href="/#contact-me" onClick={handleClick('contactme')}>Contact Me</a>
              {/* Add links to Projects and Contact me section */}
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
