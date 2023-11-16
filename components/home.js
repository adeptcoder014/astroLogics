import { Container, Card, Row, Text, Button } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import Image from "next/image";
import { useRouter } from "next/router";
import { useAuth } from "../context/token";

//=========================================================
export default function HomeScreen() {
  const context = useAuth();

  const router = useRouter();
  const theme = useTheme();
  // console.log(context);

  // console.log("theme -------------------", theme.colors);
  return (
    <Container

      css={{
        backgroundColor: "$primary",
        display: "flex",
        // flexDirection: "column",
        justifyContent: "center",
        alignContent: "center",
        padding: 20,
        minWidth: "100vw", // Set the height to 100% of viewport height
        minHeight: "100vh", // Set the height to 100% of viewport height
      }}
    >
      <div className="container-style">
        < div className="center ">
          <Image
            src={"/welcomeImage.png"}
            height={250}
            width={250}
            className="image"
            alt="Rotating moon cycle"
          />
        </div>
        <div>
          <Text h1 color="white" css={{ textAlign: "center", fontSize: "2em" }}>
            Astrologics
          </Text>
          <Text h3 css={{ textAlign: "center", fontSize: "1em" }}>
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
              backgroundColor: "white",
              border: "3px solid black",
              mt: 20,
              color: "black",
              fontWeight: "bolder"
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
  );
}
