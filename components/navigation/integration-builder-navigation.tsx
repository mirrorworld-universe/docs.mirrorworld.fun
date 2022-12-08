import { Button } from "@chakra-ui/react"
import { Box, Flex, HStack, Text } from "@chakra-ui/layout"
import { AiOutlineCaretDown } from "react-icons/ai"
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { useMemo, useState } from "react"
import Icon from "@chakra-ui/icon"
import { integrationGuidesConfig } from "../../lib/contentlayer-utils"
import { canUseDOM } from "@reach/utils"

export function IntegrationBuilderNav(props: any) {
  const [selectedLangName, setSelectedLangName] = useState<string>(
    canUseDOM()
      ? localStorage.getItem(`mw-itegration-lang`) ||
          integrationGuidesConfig.languages[0].name
      : integrationGuidesConfig.languages[0].name,
  )
  const selectedLanguage = useMemo(
    () =>
      integrationGuidesConfig.languages.find(
        (l) => l.name === selectedLangName,
      ),
    [selectedLangName, integrationGuidesConfig.languages],
  )
  return (
    <Box
      bg="topNavBody"
      backdropFilter="auto"
      backdropBlur="sm"
      position="sticky"
      top="0"
      width="full"
      zIndex={50}
      py="4"
      borderBottomWidth="1px"
      borderBottomColor="mirror.800"
      color="topNavText"
      {...props}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="8xl"
        mx="auto"
        px={{ base: "4", sm: "6", md: "8" }}
      >
        <HStack display={["none", "none", "flex"]}>
          <Menu>
            <MenuButton
              size={"sm"}
              variant="nav"
              rounded={"full"}
              as={Button}
              rightIcon={<AiOutlineCaretDown />}
            >
              {selectedLanguage?.name}
            </MenuButton>
            <MenuList>
              {integrationGuidesConfig.languages.map((lang, i) => (
                <MenuItem
                  key={i}
                  onClick={() => setSelectedLangName(lang.name)}
                >
                  <HStack>
                    <Icon as={lang.icon} />
                    <Text>{lang.name}</Text>
                  </HStack>
                </MenuItem>
              ))}
            </MenuList>
          </Menu>
        </HStack>
        <HStack spacing="8">
          <nav hidden>
            <HStack
              as="ul"
              spacing="8"
              listStyleType="none"
              fontWeight="semibold"
              fontSize="sm"
            >
              <li>Tutorials</li>
              <li>API</li>
              <li>Components</li>
            </HStack>
          </nav>
        </HStack>
      </Flex>
    </Box>
  )
}
