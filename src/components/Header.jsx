import { Box, HStack } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useRef } from "react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  useEffect(() => {
    let prevScrollPos = window.scrollY;

    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const headerElement = headerRef.current;
      if (!headerElement) {
        return;
      }
      if (prevScrollPos > currentScrollPos) {
        headerElement.style.transform = "translateY(0)";
      } else {
        headerElement.style.transform = "translateY(-200px)";
      }
      prevScrollPos = currentScrollPos;
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (anchor) => () => {
    console.log("clicked");
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        translateY={0}
        transitionProperty="transform"
        transitionDuration=".3s"
        transitionTimingFunction="ease-in-out"
        backgroundColor="#18181b"
        boxShadow="0px 2px 5px rgba(0, 0, 0, 0.2)"
        zIndex="999"
        ref={headerRef}
      >
        <Box
          color="white"
          maxWidth="1280px"
          margin="0 auto"
          paddingX={4}
          paddingY={2}
        >
          <HStack justifyContent="space-between" alignItems="center">
            <nav>
              <HStack spacing={4}>
                {socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FontAwesomeIcon icon={social.icon} size="2x" />
                  </a>
                ))}
              </HStack>
            </nav>
            <nav>
              <HStack spacing={8}>
                <a
                  href="#projects"
                  onClick={handleClick("projects")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Projects
                </a>
                <a
                  href="#contactme"
                  onClick={handleClick("contactme")}
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Contact Me
                </a>
              </HStack>
            </nav>
          </HStack>
        </Box>
      </Box>
    </Box>
  );
};
export default Header;
