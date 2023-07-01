import { Container, Text, Input, Button, Switch } from "@nextui-org/react";
import Image from "next/image";
import { useMemo, useState } from "react";
//---------------------------------------
const locations = [
  {
    name: "Lucknow",

    latitude: 26.8467,
    longitude: 80.9462,
  },
  { name: "Sitapur", latitude: 27.5609, longitude: 80.6824 },
  { name: "Madhoganj", latitude: 27.1167, longitude: 80.0333 },
  { name: "Delhi", latitude: 28.7041, longitude: 77.1025 },
  { name: "Hyderabad", latitude: 17.385, longitude: 78.4867 },
];
//==========================================================
export default function SignUp() {
  const [signUpPayload, setSignUpPayload] = useState({
    name: "",
    date: "",
    time: "",
    gender: "",
    location: "Select location",
  });

  const [selected, setSelected] = useState("locations");

  const selectedValue = useMemo(() => Array.from(selected), [selected]);

  //=================================
  return (
    <>
      <Container
        css={{
          background: "linear-gradient(205deg, black, rgb(12, 19, 79))",
          p: 15,
          display: "flex",
          flexDirection: "column",
          height: "98vh",
        }}
      >
        <Text h1 color="#f1f3f5" css={{ textAlign: "center" }}>
          Your Astrological Map Awaits
        </Text>
        <Text h4 color="#f1f3f5" css={{ textAlign: "center", mt: -20 }}>
          Enter Your Birth Information
        </Text>
        <Container
          css={{
            background: "linear-gradient(205deg, black, rgb(12, 19, 79))",
            p: -35,
            // display: "flex",
            // flexDirection: "column",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "rows",
              padding: "5px",
              marginBottom: "5px",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Input
              contentLeft={
                <Image
                  src={require("../public/icons/person.png")}
                  height={28}
                  width={28}
                />
              }
              onChange={(e) => {
                setSignUpPayload({ ...signUpPayload, name: e.target.value });
              }}
              color="red"
              css={{
                backgroundColor: "red",
              }}
              placeholder="Enter name"
            />
            <Switch
              size="md"
              onChange={(e) => {
                console.log(e.target.checked);
              }}
              checked={true}
              iconOn={
                <Image
                  src={require("../public/icons/male.png")}
                  height={28}
                  width={28}
                />
              }
              iconOff={
                <Image
                  src={require("../public/icons/female.png")}
                  height={28}
                  width={28}
                />
              }
            />{" "}
          </div>

          <select id="stateDropdown" className="dropdownLocation">
            <option className="dropdownLocationD" value="">
              Select location
            </option>
            {locations.map((x) => (
              <option value={x.value}>
                {x.name} {x.latitude} {x.longitude}
              </option>
            ))}
          </select>

          <div
            style={{
              display: "flex",
              flexDirection: "rows",
              

              // justifyContent: "space-between",
            }}
          >
            <Container>
              <Text color="white">Date</Text>

              <Input
                type="date"
                onChange={(e) => {
                  setSignUpPayload({
                    ...signUpPayload,
                    name: e.target.value,
                  });
                }}
                color="red"
                placeholder="Enter name"
              />
            </Container>
            <Container>
              <Text color="white">Time</Text>
              <Input
                type="time"
                onChange={(e) => {
                  setSignUpPayload({
                    ...signUpPayload,
                    name: e.target.value,
                  });
                }}
                color="default"
              />
            </Container>
          </div>

          <Button
            css={{
              backgroundColor: "#ff5722",
              mt: 10,
            }}
            onPress={() => {
              console.log("signUpPayload ---------------->", signUpPayload);
            }}
          >
            Get your map
          </Button>
        </Container>
      </Container>
    </>
  );
}
