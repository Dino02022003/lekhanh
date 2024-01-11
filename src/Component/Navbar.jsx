import { Box, Flex, Text, Link, Image } from "@chakra-ui/react";

function Navbar() {
  //   const location = useLocation();
  // const NavItem = ({ link, text }) => {
  //     return (
  //         <Link
  //             px={4}
  //             as={RouterLink} to={link}
  //             fontWeight={location.pathname === link ? "800" : "500"}
  //             color={location.pathname === link ? "black" : undefined}
  //         >
  //             {text}
  //         </Link>
  //     )
  // }
  return (
    <Flex w="full" h="60px" shadow="lg" bg="#0F4C04">
      <Flex
        w="33%"
        justifyContent="center"
        gap={5}
        align="center"
        color="#fff"
        fontSize={17}
      >
          <Image src="public\CLB_CỜ_VUA.png" objectFit="contain" w="auto" h="auto"/>
      </Flex>

      <Flex
        w="67%"
        justifyContent="center"
        align="center"
        gap={5}
        color="#fff"
        fontSize="md"
      >
        <Link to="/Home">Trang chủ</Link>
        <Text align="center">
          <Link to="/products">Giới thiệu</Link>
        </Text>
        <Text align="center">
          <Link>Khóa học</Link>
        </Text>
        <Text align="center">
          <Link>Shop cờ</Link>
        </Text>
        <Text align="center">
          <Link>Đăng nhập</Link>
        </Text>
      </Flex>
    </Flex>
  );
}

export default Navbar;
