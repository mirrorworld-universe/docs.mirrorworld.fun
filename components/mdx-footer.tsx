import { Box } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import siteConfig from "site.config"
import { Pagination } from "./pagination"

export function MdxFooter(props: any) {
  return (
    <chakra.footer mt="12" {...props}>
      {/*<Pagination />*/}
      <Box
        pt="4"
        borderTopWidth="1px"
        display={{ sm: "flex" }}
        justifyContent="space-between"
      />

      <Box
        fontSize="sm"
        mt="4"
        mb="10"
        opacity={0.5}
        dangerouslySetInnerHTML={{ __html: siteConfig.copyright }}
      />
    </chakra.footer>
  )
}
