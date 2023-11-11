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
        flexDirection: "column",
        justifyContent:"center",  
        padding: 20,
        minWidth: "100vw", // Set the height to 100% of viewport height
        minHeight: "100vh", // Set the height to 100% of viewport height
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
          // minHeight: "100%", // Make sure this container takes full height

        }}
      >
        {/* <div style={}> */}
          <Image
            src={"/welcomeImage.png"}
            height={250}  
            width={250}
            className="image"
            alt="Rotating moon cycle"
          />
        {/* </div> */}
        <div>
          <Text h2 color="white" css={{ textAlign: "center" }}>
            Astrologics
          </Text>
          <Text h6 css={{ textAlign: "center"}}>
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
  );
}
