import React from "react";


import Footer from "@/components/footer";
import PlayerStats2 from '../components/playerStats2';
import BoysTeam from "@/components/boysTeam";
import FunClub from "@/components/joinFanClub";
import NextMatch from "@/components/nextMatch";
import Banner from "@/components/Banner";


export default function Home() {
  return (
<div>
  <Banner />
  <NextMatch />
  <BoysTeam />
  <PlayerStats2 />
  {/* <FunClub /> */}
<Footer />
</div>
  );
}
