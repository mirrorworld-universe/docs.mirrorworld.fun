import { HStack, chakra, Icon, Stack, Text, SimpleGrid } from "@chakra-ui/react"
import Link from "next/link"
import { ArrowForwardIcon } from "@chakra-ui/icons"
import { integrationGuidesConfig } from "../../lib/contentlayer-utils"

export const IntegrationCards = (props: any) => {
  return (
    <chakra.div maxW="8xl" mx="auto" px={{ base: "4", sm: "6", md: "10" }}>
      <chakra.h1 id="skip-nav" textStyle="display.lg" mb="5" maxW="85ch" tabIndex={-1}>
        Integration Guide
      </chakra.h1>
      <SimpleGrid columns={[1, 2, 3, 4]} spacing="5" {...props}>
        {integrationGuidesConfig.languages.map((language, i) => (
          <Link key={i} href={`/integration/${language.normalizedName}`}>
            <Stack
              align={"flex-start"}
              spacing={3}
              p={4}
              rounded="12px"
              cursor="pointer"
              transition="all 0.2s ease-in"
              _hover={{
                bg: "flatButtonHoverBg",
                shadow: "focused",
                textDecoration: "none",
              }}
              borderColor="searchTriggerRingColor"
              borderWidth="1px"
              borderStyle="solid"
            >
              <HStack cursor="pointer" color="textLink">
                <Icon as={language.icon} fontSize={"1.2em"} />
                <Text fontSize="lg" fontWeight="extrabold">
                  {language.name}
                </Text>
              </HStack>

              <Text fontSize={"0.8em"}>
                Get started with the {language.name} SDK&nbsp;
                <Icon as={ArrowForwardIcon} fontSize={"1.2em"} />
              </Text>
            </Stack>
          </Link>
        ))}
      </SimpleGrid>
    </chakra.div>
  )
}
