import React from "react";
import BuyerFollowingCard from "./BuyerFollowingCard";
import Searchbar from "./searchbar";
import Image1 from "../../images/Following/flair.png";
import Image2 from "../../images/Following/glamour.png";
import Image3 from "../../images/Following/cube.png";
import Image4 from "../../images/Following/svelte.png";
import Image5 from "../../images/Following/verve.png";
import { ArrowLeft } from "react-iconly";
import "./buyerPosts.css";

const BuyerFollowing = () => {
  const followersData = [
    {
      profileImg: Image1,
      followerName: "FLAIR",
      //   messageCount: 7,
    },
    {
      profileImg: Image2,
      followerName: "GLAMOUR",
      messageCount: 1,
    },
    {
      profileImg: Image3,
      followerName: "CUBE",
      // messageCount: 12,
    },
    {
      profileImg: Image4,
      followerName: "SVELTE",
      messageCount: 9,
    },
    {
      profileImg: Image5,
      followerName: "VERVE",
      // messageCount: 12,
    },
  ];

  const renderFollowerCards = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {followersData.map((follower, index) => (
          <BuyerFollowingCard
            key={index}
            profileImg={follower.profileImg}
            followerName={follower.followerName}
            messageCount={follower.messageCount}
          />
        ))}
      </div>
    );
  };

  return (
    <div className="pt-[30px] pb-[30px] pl-[40px]">
      <div className="seller-post-title ">
        <div className="seller-post-back-nav">
          <ArrowLeft size={32} stroke="light" />
        </div>
        <div className="buyer-following-title-content">Following</div>
      </div>
      <div className="Search-following-sellers">
        <Searchbar />
      </div>
      {renderFollowerCards()}
    </div>
  );
};

export default BuyerFollowing;
