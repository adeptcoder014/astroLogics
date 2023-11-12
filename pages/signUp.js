import {
  Container,
  Text,
  Input,
  Button,
  Switch,
  Loading,
  Modal,
} from "@nextui-org/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import TextInput from "react-autocomplete-input";
import "react-autocomplete-input/dist/bundle.css";
import Autocomplete from "../components/locationInput";
import astroServer from "../constants/url";
import { cities } from "../constants/cities";
import { useRouter } from "next/router";

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
  
  const router = useRouter();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isErrorModalVisible, setIsErrorModalVisible] = useState(false);

  const [apiError, setApiError] = useState("");

  const [isMale, setIsMale] = useState(false);
  const [isFemale, setIsFemale] = useState(false);
  const [isApiCalling, setIsApiCalling] = useState(false);
  const [location, setLocation] = useState();
  const [signUpPayload, setSignUpPayload] = useState({
    name: "",
    date: "",
    time: "",
    gender: "",
  });

  let payload = {
    name: signUpPayload.name,
    date: signUpPayload.date,
    time: signUpPayload.time,
    gender: isMale ? "male" : isFemale ? "female" : null,
    location: {
      name: location?.name,
      lat: location?.latitude,
      long: location?.longitude,
    },
  };
  const handleSignUpSubmission = () => {
    setIsApiCalling(true);
    astroServer
      .post("/user/create", payload)
      .then((res) => {
        console.log("---------- RESPONSE ----------->", res);
        setIsApiCalling(false);
        setIsModalVisible(true);
        router.push("/home");
      })
      .catch((error) => {
        setApiError(error?.response?.data?.response);
        setIsErrorModalVisible(true);
        setIsApiCalling(false);
      });
  };
  //=================================
  return (
    <>
      {/* ===================== SUCCESS_MODAL ==================================== */}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={isModalVisible}
        onClose={() => setIsModalVisible(false)}
        css={{
          width: "80%",
          m: "auto",
        }}
      >
        <Text
          color="success"
          css={{
            fontWeight: "bolder",
          }}
        >
          Your map has beed successfully created !
        </Text>
        <Text
          css={{
            color: "black",
            fontWeight: "bolder",
          }}
        >
          Go explore more!
        </Text>
      </Modal>

      {/* ======================= ERROR_MODAL ============================ */}
      <Modal
        closeButton
        aria-labelledby="modal-title"
        open={isErrorModalVisible}
        onClose={() => setIsErrorModalVisible(false)}
        css={{
          width: "80%",
          m: "auto",
        }}
      >
        <Text
          color="warning"
          css={{
            fontWeight: "bolder",
          }}
        >
          An error occurred!
        </Text>
        <Text
          css={{
            color: "gray",
            fontWeight: "bolder",
          }}
        >
          {apiError}
        </Text>
      </Modal>

      <Container
        css={{
          backgroundColor: "$primary",
          display: "flex",
          // flexDirection: "ro",
          justifyContent: "center",
          alignItems: "center",
          minWidth: "100vw", // Set the height to 100% of viewport height
          minHeight: "100vh", // Set the height to 100% of viewport height
        }}
        >
        <div
          style={{
            background: "linear-gradient(222deg, #0072f5, #3F51B5)",
            border:"1px solid white",
            padding: 50,
            borderRadius: "20px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignContent: "center",
            maxHeight: "80vh",
          }}
        >
          <div>
            <h1>Your Astrological Map Awaits</h1>
            <h3 style={{textAlign:"center"}}>Enter Your Birth Information</h3>
          </div>

          {/* ============= NAME ===================== */}
          <div style={{
            // border:"1px solid white",
            display:"flex",
            justifyContent:"space-around",
            alignContent:"center",
            marginBottom:"5%"

          }}>
            <div >

          <p >Enter you name</p>

            <Input
              contentLeft={
                <Image
                alt="alt tag"
                src={require("../public/icons/person.png")}
                height={28}
                width={100}
                />
              }
              onChange={(e) => {
                setSignUpPayload({ ...signUpPayload, name: e.target.value });
              }}
              color="red"
              css={{
                backgroundColor: "blue",
              }}
              placeholder="Enter name"
              />

              </div>
            {/* ============= GENDER ===================== */}

          
            <div
              style={{
                display: "flex",
                flexDirection:"column",

                justifyContent: "space-around",
             
                width:150,
              }}
              >
                        <p >Pick your gender</p>
<div style={{
  display: "flex",
  // border:"1px solid white",
  display: "flex",

                justifyContent: "space-around",
  
  
              }}>
              <div
                style={{
                  background: isMale
                    ? "linear-gradient(222deg, #2196F3, rgb(10 13 29))"
                    : "linear-gradient(50deg, rgb(0, 114, 245), rgb(63, 81, 181))",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: isMale ? "1px solid white" : "none",
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',      
                  cursor: "pointer",
                  padding: "0px 20px",
                }}
                onClick={() => {
                  setIsMale(true);

                  setIsFemale(false);
                }}
              >
                <Image
                  alt="alt tag"
                  src={require("../public/icons/male.png")}
                  height={30}
                  width={30}
                />
                {/* <p> Male</p> */}
              </div>
              <div
                style={{
                  background: isFemale
                    ? "linear-gradient(222deg, #2196F3, rgb(10 13 29))"
                    : "linear-gradient(50deg, rgb(0, 114, 245), rgb(63, 81, 181))",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  border: isFemale ? "1px solid white" : "none",
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',            
                  cursor: "pointer",
                  padding: "0px 20px",
                }}
                onClick={() => {
                  setIsFemale(true);

                  setIsMale(false);
                }}
              >
                <Image
                  alt="alt tag"
                  src={require("../public/icons/female.png")}
                  height={30}
                  width={30}
                />
              
              </div>
            </div>
            </div>
          </div>

       
       

          {/* ============= LOCATION  ===================== */}
          <div style={{ marginTop: "10px",                
          // :"1px solid white",
 }}>
  <p>Natal time   </p>
            <Autocomplete locations={locations} setLocation={setLocation} />
          </div>

          {/* ============= DATE AND TIME  ===================== */}
          <div
            style={{
              display: "flex",
              flexDirection: "rows",

              justifyContent: "space-between",
              // marginTop: -15,
            }}
          >
            <div>
              <Text color="white" aria-label="date">
                Date
              </Text>

              <Input
                type="date"
                onChange={(e) => {
                  setSignUpPayload({
                    ...signUpPayload,
                    date: e.target.value,
                  });
                }}
                css={{
                  width: 250,
                }}
                color="black"
              />
            </div>
            <div>
              <Text color="white" aria-label="Time">
                Time
              </Text>
              <Input
                type="time"
                onChange={(e) => {
                  setSignUpPayload({
                    ...signUpPayload,
                    time: e.target.value,
                  });
                }}
                css={{
                  width: 150,
                }}

                color="default"
              />
            </div>
          </div>
          {/* ============= BUTTON ===================== */}

          <div
            style={{
              margin: "auto",
              width: "100%",
              marginTop:15
            }}
          >
            <Button
              css={{
                backgroundColor: "#ff5722",
                mt: 20,
                width: "100%",
                backgroundColor: "white",
                border:"3px solid black",
                mt: 20,
                color:"black",
                fontWeight:"bolder"
              }}
              onPress={handleSignUpSubmission}
            >
              {" "}
              {isApiCalling ? <Loading color="warning" /> : "Get your map"}
            </Button>
          </div>
        </div>
       
        {/* ================================== */}
      </Container>
    </>
  );
}
