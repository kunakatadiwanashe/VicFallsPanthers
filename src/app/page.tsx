import React from "react";


import Footer from "@/components/footer";
import PlayerStats2 from '../components/playerStats2';
import BoysTeam from "@/components/boysTeam";
import NextMatch from "@/components/nextMatch";
import Banner from "@/components/Banner";
import GamesPlayed from "../components/gamesplayed";
import FunClub from "@/components/joinFanClub";
import Gallery from "@/components/Gallery";
import SocialMedia from "@/components/SocialMedia";







export default function Home() {
  return (
<div>
  <Banner />
  <NextMatch />
  <BoysTeam />
  <PlayerStats2 />
  {/* <SocialMedia /> */}
  <Gallery />
  <FunClub />
 <GamesPlayed />
<Footer />
</div>
  );
}
