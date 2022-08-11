import {
  chakra,
  forwardRef,
  HTMLChakraProps,
  ThemingProps,
  useStyleConfig,
} from "@chakra-ui/system"

// type ButtonProps = HTMLChakraProps<"button"> &
//   ThemingProps<"Button"> & {
//     children: React.ReactNode
//   }
export const SupportButton = forwardRef((props, ref) => {
  const { size, variant, ...ownProps } = props
  const styles = useStyleConfig("Button", { variant, size })
  return (
    <chakra.button
      ref={ref}
      __css={styles}
      {...ownProps}
      bg="mirror.400"
      color="#000"
      onClick={() => {
        window.open(props.link, "_blank")
      }}
    >
      {props.children}
    </chakra.button>
  )
})
