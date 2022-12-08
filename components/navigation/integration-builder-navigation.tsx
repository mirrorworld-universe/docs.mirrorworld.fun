import { Button } from "@chakra-ui/react"
import { Box, Flex, HStack, Text } from "@chakra-ui/layout"
import { AiOutlineCaretDown } from "react-icons/ai"
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { useEffect, useMemo, useState } from "react"
import Icon from "@chakra-ui/icon"
import { integrationGuidesConfig } from "../../lib/contentlayer-utils"
import { canUseDOM } from "@reach/utils"
import { integrationDropdownList } from "../../theme/layer-styles"

const SELECTED_INTEGRATION_LANGUAGE = `mw-integration-lang`

export function IntegrationBuilderNav(props: any) {
  const [selectedLangName, setSelectedLangName] = useState<string>(
    canUseDOM()
      ? localStorage.getItem(SELECTED_INTEGRATION_LANGUAGE) ||
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

  useEffect(() => {
    localStorage.setItem(SELECTED_INTEGRATION_LANGUAGE, selectedLanguage.name)
  }, [selectedLangName, selectedLanguage])

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
        <HStack spacing={5}>
          <HStack>
            <Text>Language: </Text>
            <Menu>
              <MenuButton
                size={"sm"}
                variant="nav"
                rounded={"full"}
                as={Button}
                rightIcon={<AiOutlineCaretDown />}
                border="1px solid currentColor"
              >
                <HStack>
                  <Icon as={selectedLanguage?.icon} />
                  <Text>{selectedLanguage?.name}</Text>
                </HStack>
              </MenuButton>
              <MenuList {...integrationDropdownList}>
                {integrationGuidesConfig.languages.map((lang, i) => (
                  <MenuItem
                    _hover={{
                      bg: "topNavButtonLayoutHover",
                    }}
                    _focus={{
                      bg: "topNavButtonLayoutHover",
                    }}
                    _active={{
                      bg: "topNavButtonLayoutHover",
                    }}
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
