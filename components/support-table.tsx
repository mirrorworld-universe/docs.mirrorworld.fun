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
  chain: Chain
  status: ChainSupportStatus
  isOnMainnet: boolean
  isOnTestnet: boolean
  icon: any
}
const supportDataTable: SupportField[] = [
  {
    chain: "Solana",
    status: "Live",
    isOnMainnet: true,
    isOnTestnet: true,
    icon: SolanaIcon,
  },
  {
    chain: "Ethereum",
    status: "In Development",
    isOnMainnet: true,
    isOnTestnet: true,
    icon: EthereumIcon,
  },
  {
    chain: "Polygon",
    status: "In Development",
    isOnMainnet: true,
    isOnTestnet: true,
    icon: PolygonIcon,
  },
  {
    chain: "BNB Chain",
    status: "In Development",
    isOnMainnet: true,
    isOnTestnet: true,
    icon: BNBChainIcon,
  },
  {
    chain: "Aptos",
    status: "In Development",
    isOnMainnet: true,
    isOnTestnet: true,
    icon: AptosIcon,
  },
  {
    chain: "Sui",
    status: "In Development",
    isOnMainnet: true,
    isOnTestnet: true,
    icon: SuiIcon,
  },
]

export const ChainSupportTable = (props: BoxProps) => {
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
                    <HStack spacing="1">
                      <Text>Blockchain</Text>
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
                  Mainnet
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
                  px={8}
                >
                  Testnet
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {supportDataTable.map((chain, i) => (
                <Tr key={i}>
                  <Td border="none" py="8" bg="#1E1E1E" px={8}>
                    <HStack spacing="3">
                      <Icon as={chain.icon} />
                      <Text fontSize="md">{chain.chain}</Text>
                    </HStack>
                  </Td>
                  <Td border="none" py="8" bg="#1E1E1E" px={8}>
                    <HStack spacing="3">
                      <Text fontSize="md">{chain.status}</Text>
                    </HStack>
                  </Td>
                  <Td border="none" py="8" bg="#1E1E1E" px={8} fontSize="lg">
                    <Icon
                      color={
                        chain.status === "Live"
                          ? "mirror.400"
                          : "whiteAlpha.600"
                      }
                      as={FiCheckCircle}
                    />
                  </Td>
                  <Td border="none" py="8" bg="#1E1E1E" px={8} fontSize="lg">
                    <Icon
                      color={
                        chain.status === "Live"
                          ? "mirror.400"
                          : "whiteAlpha.600"
                      }
                      as={FiCheckCircle}
                    />
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
