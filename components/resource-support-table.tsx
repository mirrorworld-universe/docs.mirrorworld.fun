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
import { FiCheckCircle } from "react-icons/fi"
import {
  AptosIcon,
  BNBChainIcon,
  EthereumIcon,
  PolygonIcon,
  SolanaIcon,
  SuiIcon,
} from "./icons"
import { Spacer } from "@chakra-ui/layout"

export type Chain =
  | "Solana"
  | "Ethereum"
  | "BNB Chain"
  | "Polygon"
  | "Aptos"
  | "Sui"
export type ChainSupportStatus = "In Development" | "Live"
export interface SupportField {
  name: string
  Platform: string
  How_to_submit: string
  type?: string
}
const supportDataTable: SupportField[] = [
  {
    name: "Developer Community",
    Platform: "Disocrd",
    How_to_submit: "https://discord.gg/7wFeftDwZA",
    type: "link",
  },
  {
    name: "VIP support",
    Platform: "Telegram",
    How_to_submit: "Only supported for Enterprise tier",
  },
  {
    name: "Support Tick",
    Platform: "E-mail",
    How_to_submit: "Please submit a support ticket to sdk@mirrorworld.fun",
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
                      <Text fontSize="md">{chain.name}</Text>
                    </HStack>
                  </Td>
                  <Td border="none" py="8" bg="#1E1E1E" px={8}>
                    <HStack spacing="3">
                      <Text fontSize="md">{chain.Platform}</Text>
                    </HStack>
                  </Td>
                  <Td border="none" py="8" bg="#1E1E1E" px={8} fontSize="lg">
                    {chain.type === "link" ? (
                      <a
                        rel="noreferrer"
                        color="mirror.400"
                        className="css-fdexvs"
                        target="_blank"
                        href={chain.How_to_submit}
                      >
                        {chain.How_to_submit}
                      </a>
                    ) : (
                      chain.How_to_submit
                    )}
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
