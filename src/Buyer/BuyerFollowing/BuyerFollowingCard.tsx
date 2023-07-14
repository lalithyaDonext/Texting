import React from "react";
import "./followingCard.css";

interface BuyerFollowingCardProps {
  profileImg: string;
  followerName: string;
  messageCount?: number; // Make messageCount optional
}

const BuyerFollowingCard: React.FC<BuyerFollowingCardProps> = ({
  profileImg,
  followerName,
  messageCount,
}) => {
  return (
    <div className="buyer-following-card">
      <div className="buyer-following-card-content">
        <div className="buyer-profile-img">
          {/* Render profile image here */}
          <img src={profileImg} alt="Profile" />
        </div>
        <div className="following-name">{followerName}</div>
        {/* Render message count only if it is provided */}
        {messageCount !== undefined && (
          <div className="buyer-following-msg-count">{messageCount}</div>
        )}
      </div>
    </div>
  );
};

export default BuyerFollowingCard;
