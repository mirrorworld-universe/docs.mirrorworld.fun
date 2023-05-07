import {
    BoxProps,
    Table,
    Tbody,
    Td,
    Th,
    Thead,
    Tr,
    Spacer,
    Stack,
    Box
} from "@chakra-ui/react"

export const MarketplaceFeatureTable = (props: BoxProps) => {
    return (
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
                        <Tr>
                            <Th
                                fontSize="md"
                                fontWeight="bold"
                                bg="supportTableHeadBg"
                                color="topNavButtonTextActive"
                                py="8"
                                shadow="inset 0px 8px 0px rgb(255 255 255 / 8%)"
                            >
                                Asset minting
                            </Th>
                            <Th color="text" fontSize="sm" bg="supportTableCellBg">• Create Collection <br />• Mint NFTs into collection</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        <Tr>
                            <Td
                                fontSize="md"
                                fontWeight="bold"
                                bg="supportTableHeadBg"
                                color="topNavButtonTextActive"
                                py="8"
                                shadow="inset 0px 8px 0px rgb(255 255 255 / 8%)"
                            >Marketplace</Td>
                            <Td
                                color="text" bg="supportTableCellBg">• Create Seaport Marketplace instance <br /> • List NFTs <br /> • Buy NFTs <br /> • Cancel listing <br /> • Update Listing</Td>
                        </Tr>
                        <Tr>
                            <Td
                                fontSize="md"
                                fontWeight="bold"
                                bg="supportTableHeadBg"
                                color="topNavButtonTextActive"
                                py="8"
                                shadow="inset 0px 8px 0px rgb(255 255 255 / 8%)"
                            >Query NFTs</Td>
                            <Td
                                color="text" bg="supportTableCellBg">• By Owner <br /> • By Creators <br /> • By Update Authorities</Td>
                        </Tr>
                        <Tr>
                            <Td
                                fontSize="md"
                                fontWeight="bold"
                                bg="supportTableHeadBg"
                                color="topNavButtonTextActive"
                                py="8"
                            >Query NFT Transaction History</Td>
                            <Td color="text" bg="supportTableCellBg">
                                /
                            </Td>
                        </Tr>
                    </Tbody>
                </Table>
            </Box>
        </Stack>
    )
}
