import { Container, Card, Row, Text, Button } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";

//=========================================================
export default function HomeScreen() {
  const router = useRouter();
  const theme = useTheme();
  // console.log("theme -------------------", theme.colors);
  return (
    <Container
      fluid
      css={{ backgroundColor: "$container", display: "flex",  flexDirection:"column",height:"100vh" }}
    >
      <Container
        css={{
          backgroundColor: "$primary",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height:"100%",
        }}
      >
        <div
          style={{
            background: "linear-gradient(222deg, #0072f5, #3F51B5)",
            padding: "10%",
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
          }}
        >
          <div>
            <Image
              src={"/welcomeImage.png"}
              height={250}
              width={250}
              className="image"
              alt="Rotating moon cycle"
            />
          </div>
          <div>
            <Text h2 color="white" css={{ textAlign: "center" }}>
              Astrologics
            </Text>
            <Text h6 css={{ textAlign: "center", mt: -15 }}>
              Explore Your Cosmic Destiny with Astrologics
            </Text>
          </div>
          <div
            style={{
              margin: "auto",
            }}
          >
            <Button
              css={{
                backgroundColor: "#ff5722",
                mt: 20,
              }}
              onPress={() => {
                router.push("/signUp");
              }}
            >
              {" "}
              Get you map
            </Button>
          </div>
        </div>
      </Container>
    </Container>
  );
}
