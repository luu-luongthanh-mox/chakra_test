import { Box, Link, Wrap, WrapItem } from "@chakra-ui/react";
import { AuthProvider, useAuth } from "Context/AuthContext";
import { Router, useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  const { signout, getCurrentUser } = useAuth();
  const user = getCurrentUser();
  const onSignout = () => {
    signout();
    router.push("/");
  };

  return (
    <Box bg="teal.500" w="100%" p={4} color="white" justifyContent="space-between" display="flex">
      <Wrap display="inline-flex">
        <WrapItem>
          <Link href="/">Home</Link>
        </WrapItem>
        <WrapItem>
          <Link href="/blogs">Blogs</Link>
        </WrapItem>
      </Wrap>
      <Wrap display="inline-flex">
        <WrapItem>{user && <Link onClick={onSignout}>Log out</Link>}</WrapItem>
      </Wrap>
    </Box>
  );
};
