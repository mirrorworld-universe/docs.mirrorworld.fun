import {
  Box,
  BoxProps,
  HStack,
  Stack,
  Text,
  Icon,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"

import { Spacer } from "@chakra-ui/layout"

export type Chain =
  | "Solana"
  | "Ethereum"
  | "BNB Chain"
  | "Polygon"
  | "Aptos"
  | "Sui"

export interface SupportField {
  name: string
  Platform: string
  How_to_submit: string
  type?: string
  event?: string
}
const supportDataTable: SupportField[] = [
  {
    name: "Discord Developer Community",
    Platform: "Disocrd",
    How_to_submit: "https://discord.gg/7wFeftDwZA",
    type: "link",
    event: "join_discord",
  },
  {
    name: "Telegram Community Group",
    Platform: "Telegram",
    How_to_submit: "https://t.me/mirrorworld_sdk",
    type: "link",
    event: "join_telegram",
  },
  {
    name: "Telegram Channel for Announcements:",
    Platform: "Telegram",
    How_to_submit: "https://t.me/mirrorworld_news",
    type: "link",
    event: "join_telegram_for_news",
  },
  {
    name: "Telegram Support Group",
    Platform: "Telegram",
    How_to_submit: "Only supported for Enterprise tier",
  },
  {
    name: "Support Tick",
    Platform: "E-mail",
    How_to_submit: "Please submit a support ticket to sdk@mirrorworld.fun",
  },
  {
    name: "Mirror World Research Blog",
    Platform: "Blog",
    How_to_submit: "https://blog.mirrorworld.fun",
    type: "link",
    event: "join_telegram_for_news",
  },
]

export const ResourceSupportTable = (props: BoxProps) => {
  return (
    <Box bg="transparent" borderRadius={"14px"} {...props}>
      <Stack spacing="5">
        <Spacer pt={6} />
        <Box
          overflowX="auto"
          // shadow="0px 8px 0px rgba(0, 0, 0, 0.3), inset 0px -8px 0px rgba(0, 0, 0, 0.15);"
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
                    <HStack spacing="1"></HStack>
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
                  Platform
                </Th>
                <Th
                  fontSize="md"
                  fontWeight="bold"
                  color="mirror.400"
                  border="none"
                  py="8"
                  bg="#2C2C2C"
                  shadow="inset 0px 8px 0px rgb(255 255 255 / 8%)"
                  roundedTopRight="10px"
                  width="300"
                  px={8}
                >
                  How to submit
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {supportDataTable.map((chain, i) => (
                <Tr key={i}>
                  <Td border="none" py="8" bg="#1E1E1E" px={8}>
                    <HStack spacing="3">
                      <Text
                        maxWidth={"200px"}
                        style={{ whiteSpace: "break-spaces" }}
                        fontSize="md"
                      >
                        {chain.name}
                      </Text>
                    </HStack>
                  </Td>
                  <Td border="none" py="8" bg="#1E1E1E" px={8}>
                    <HStack spacing="3">
                      <Text
                        maxWidth={"200px"}
                        style={{ whiteSpace: "break-spaces" }}
                        fontSize="md"
                      >
                        {chain.Platform}
                      </Text>
                    </HStack>
                  </Td>
                  <Td border="none" py="8" bg="#1E1E1E" px={8} fontSize="lg">
                    <Text
                      maxWidth={"300px"}
                      style={{ whiteSpace: "break-spaces" }}
                    >
                      {chain.type === "link" ? (
                        <a
                          rel="noreferrer"
                          color="mirror.400"
                          className="css-fdexvs"
                          target="_blank"
                          onClick={() => {
                            window.open(chain.How_to_submit)
                            // @ts-ignore
                            window.mixgather.event(chain.event)
                          }}
                        >
                          {chain.How_to_submit}
                        </a>
                      ) : (
                        chain.How_to_submit
                      )}
                    </Text>
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
