import { AiOutlineAndroid } from "react-icons/ai"
import {
  SiJavascript,
  SiNodedotjs,
  SiRust,
  SiSwift,
  SiUnity,
} from "react-icons/si"
import {
  Box,
  BoxProps,
  HStack,
  Icon,
  Stack,
  Table,
  Tbody,
  Td,
  Text,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"
import { Spacer } from "@chakra-ui/layout"
import NextLink from "next/link"
import { ArrowRightIcon, GithubIcon } from "./icons"

export enum Status {
  Production = "✅ In Production",
  Development = "🚧 In Development",
  Pending = "🟠 Pending",
}

const languageSupportData = [
  {
    label: "Android",
    icon: AiOutlineAndroid,
    id: "android",
    github: "https://github.com/mirrorworld-universe/mirrorworld-sdk-android",
    docs: "/android/android-installation",
    status: Status.Production,
  },
  {
    label: "iOS",
    icon: SiSwift,
    id: "ios",
    github: "https://github.com/mirrorworld-universe/mirrorworld-sdk-ios",
    docs: "/ios/ios-installation",
    status: Status.Development,
  },
  {
    label: "Unity",
    icon: SiUnity,
    id: "unity",
    github: "https://github.com/mirrorworld-universe/mirrorworld-sdk-unity",
    docs: "/unity/unity-installation",
    status: Status.Production,
  },
  {
    label: "JavaScript",
    icon: SiJavascript,
    id: "js",
    github: "https://github.com/mirrorworld-universe/mirrorworld-sdk-js",
    docs: "/js/js-installation",
    status: Status.Production,
  },
  {
    label: "Rust",
    icon: SiRust,
    id: "rust",
    github: "https://github.com/mirrorworld-universe/mirrorworld-sdk-rust",
    docs: "/rust/rust-installation",
    status: Status.Pending,
  },
]

export const LanguageSupportTable = (props: BoxProps) => {
  return (
    <Box bg="transparent" borderRadius={"14px"} {...props}>
      <Stack spacing="5">
        <Spacer pt={6} />
        <Box
          overflowX="auto"
          shadow="-4px 8px 0px rgba(0, 0, 0, 0.3), inset 0px 8px 0px rgba(255, 255, 255, 0.08), inset 0px -8px 0px rgba(0, 0, 0, 0.25);"
          rounded="14px"
          border={"2px solid"}
          borderColor={"black"}
        >
          <Table
            my={0}
            bg={"dark"}
            borderColor="mirror.700"
            shadow="0px 8px 0px rgba(0, 0, 0, 0.3)"
            rounded="14px"
          >
            <Thead>
              <Tr borderColor="mirror.700">
                <Th
                  fontSize="md"
                  fontWeight="bold"
                  color="mirror.400"
                  border="none"
                  py="8"
                  bg="#2C2C2C"
                  shadow="inset 0px 8px 0px rgb(255 255 255 / 8%)"
                  roundedTopLeft="10px"
                  px={6}
                >
                  <HStack spacing="3">
                    <HStack spacing="1">
                      <Text>Language / Framework</Text>
                    </HStack>
                  </HStack>
                </Th>
                <Th
                  fontSize="md"
                  fontWeight="bold"
                  color="mirror.400"
                  border="none"
                  py="8"
                  bg="#2C2C2C"
                  shadow="inset 0px 8px 0px rgb(255 255 255 / 8%)"
                  px={8}
                >
                  Status
                </Th>
                <Th
                  fontSize="md"
                  fontWeight="bold"
                  color="mirror.400"
                  border="none"
                  py="8"
                  bg="#2C2C2C"
                  shadow="inset 0px 8px 0px rgb(255 255 255 / 8%)"
                  px={8}
                >
                  Documentation
                </Th>
                <Th
                  fontSize="md"
                  fontWeight="bold"
                  color="mirror.400"
                  border="none"
                  py="8"
                  bg="#2C2C2C"
                  shadow="inset 0px 8px 0px rgb(255 255 255 / 8%)"
                  px={8}
                >
                  GitHub
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {languageSupportData.map((language, i) => (
                <Tr key={i}>
                  <Td border="none" py="8" bg="#1E1E1E" px={8}>
                    <HStack color="mirror.base" spacing="3">
                      <Icon fontSize={"1.5rem"} as={language.icon} />
                      <Text fontSize="md">{language.label}</Text>
                    </HStack>
                  </Td>
                  <Td border="none" py="8" bg="#1E1E1E" px={8}>
                    <HStack spacing="3">
                      <Text fontSize="md">{language.status}</Text>
                    </HStack>
                  </Td>
                  <Td border="none" py="8" bg="#1E1E1E" px={8} fontSize="lg">
                    <NextLink href={language.docs} passHref>
                      <HStack spacing="3">
                        <Text fontSize="md" textDecoration="underline">
                          {language.label} docs
                        </Text>
                        <Icon as={ArrowRightIcon} />
                      </HStack>
                    </NextLink>
                  </Td>
                  <Td border="none" py="8" bg="#1E1E1E" px={8} fontSize="lg">
                    <NextLink href={language.github} passHref>
                      <HStack spacing="3" textDecoration="underline">
                        <Icon as={GithubIcon} />
                        <Text fontSize="md">View repository</Text>
                      </HStack>
                    </NextLink>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Stack>
    </Box>
  )
}
