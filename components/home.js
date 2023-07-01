import { Container, Card, Row, Text, Button } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

//=========================================================
export default function HomeScreen() {
const router = useRouter()
  const theme = useTheme();
  // console.log("theme -------------------", theme.colors);
  return (
    <Container fluid css={{ backgroundColor: "$container" ,flex:1}}>
      <Container
        css={{
          backgroundColor: "$primary",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "98vh",
        }}
      >
        <Image
          src={"/welcomeImage.png"}
          height={250}
          width={250}
          className="image"
          alt="Rotating moon cycle"
        />
        <Text h2 color="white">
          Astrologics
        </Text>
        <Text h5 css={{ textAlign: "center" }}>
          Explore Your Cosmic Destiny with Astrologics
        </Text>
        <Button
          css={{
            backgroundColor: "#ff5722",
            mt: 10,
          }}
          onPress={() => {
         router.push("/signUp")
          }}
        >
          {" "}
          Get you map
        </Button>
      </Container>
    </Container>
  );
}
