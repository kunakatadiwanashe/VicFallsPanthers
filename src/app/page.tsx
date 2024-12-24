import React from "react";


import Footer from "@/components/footer";
import BoysTeam from "@/components/boysTeam";
import NextMatch from "@/components/nextMatch";
import Banner from "@/components/Banner";
import GamesPlayed from "../components/gamesplayed";
import FunClub from "@/components/joinFanClub";
import Gallery from "@/components/Gallery";
import SocialMedia from "@/components/SocialMedia";







export default function Home() {
  return (
<div className="font-joy">
  <Banner />
  <GamesPlayed />
  <NextMatch />
  <BoysTeam />
  {/* <PlayerStats2 /> */}
  <SocialMedia />
  <Gallery />
  <FunClub />
<Footer />

</div>
  );
}
