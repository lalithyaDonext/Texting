import React from 'react';
import './followerCard.css';

interface SellerFollowersCardProps {
  profileImg: string;
  followerName: string;
  messageCount?: number; // Make messageCount optional
}

const SellerFollowersCard: React.FC<SellerFollowersCardProps> = ({ profileImg, followerName, messageCount }) => {
  return (
    <div className='seller-followers-card'>
      <div className='seller-follower-card-content'>
        <div className='follower-profile-img'>
          {/* Render profile image here */}
          <img src={profileImg} alt='Profile' />
        </div>
        <div className='follower-name'>{followerName}</div>
        {/* Render message count only if it is provided */}
        {messageCount !== undefined && <div className='follower-msg-count'>{messageCount}</div>}
      </div>
    </div>
  );
};

export default SellerFollowersCard;
