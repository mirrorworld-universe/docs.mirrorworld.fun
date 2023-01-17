import {
  chakra,
  Box,
  BoxProps,
  HStack,
  Stack,
  Text,
  Table,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react"

import { Spacer } from "@chakra-ui/layout"

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
    Platform: "Discord",
    How_to_submit: "https://mirrorworld.fun/discord",
    type: "link",
    event: "join_discord",
  },
  {
    name: "Telegram Community Group",
    Platform: "Telegram",
    How_to_submit: "https://mirrorworld.fun/telegram",
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
            bg={"flatButtonHoverBg"}
            borderColor="text"
            shadow="0px 8px 0px rgba(0, 0, 0, 0.3)"
            rounded="14px"
          >
            <Thead>
              <Tr borderColor="calloutBorderColor">
                <Th
                  fontSize="md"
                  fontWeight="bold"
                  bg="supportTableHeadBg"
                  color="topNavButtonTextActive"
                  border="none"
                  py="8"
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
                  color="topNavButtonTextActive"
                  border="none"
                  py="8"
                  bg="supportTableHeadBg"
                  shadow="inset 0px 8px 0px rgb(255 255 255 / 8%)"
                  px={8}
                >
                  Platform
                </Th>
                <Th
                  fontSize="md"
                  fontWeight="bold"
                  color="topNavButtonTextActive"
                  border="none"
                  py="8"
                  bg="supportTableHeadBg"
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
                  <Td border="none" py="8" bg="supportTableCellBg" px={8}>
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
                  <Td border="none" py="8" bg="supportTableCellBg" px={8}>
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
                  <Td
                    border="none"
                    py="8"
                    bg="supportTableCellBg"
                    px={8}
                    fontSize="lg"
                  >
                    <Text
                      maxWidth={"300px"}
                      style={{ whiteSpace: "break-spaces" }}
                    >
                      {chain.type === "link" ? (
                        <chakra.a
                          rel="noreferrer"
                          target="_blank"
                          color={"textLink"}
                          onClick={() => {
                            window.open(chain.How_to_submit)
                            // @ts-ignore
                            window.mixgather.event(chain.event)
                          }}
                        >
                          {chain.How_to_submit}
                        </chakra.a>
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
