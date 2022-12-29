import { Button } from "@chakra-ui/react"
import { Box, Flex, HStack, Text } from "@chakra-ui/layout"
import { AiOutlineCaretDown } from "react-icons/ai"
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react"
import { useEffect, useMemo, useState } from "react"
import Icon from "@chakra-ui/icon"
import { integrationGuidesConfig } from "../../lib/contentlayer-utils"
import { integrationDropdownList } from "../../theme/layer-styles"
import { useRouter } from "next/router"

export function IntegrationBuilderNav(props: any) {
  const router = useRouter()
  const selectedLanguage = useMemo(() => {
    return (
      integrationGuidesConfig.languages.find((l) => {
        return l.normalizedName === router.asPath.split("/")[2]
      }) || integrationGuidesConfig.languages[0]
    )
  }, [router.asPath, integrationGuidesConfig, router.pathname])

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
                    onClick={() =>
                      router.push(`/integration/${lang.normalizedName}`)
                    }
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
