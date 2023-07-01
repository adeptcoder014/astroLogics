import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import HomeScreen from "../components/home";
import { NextUIProvider } from "@nextui-org/react";
import { theme } from "../theme";
//=====================================================
export default function Home() {
  return (
    <>
      <NextUIProvider theme={theme}>
        <HomeScreen />
      </NextUIProvider>
    </>
  );
}
