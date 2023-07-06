import React from 'react';
import SellerFollowersCard from './SellerFollowersCard';
import '../SellerPostViewProcess/posts.css';
import './followerCard.css'
import { BsArrowLeft, BsPlus, BsSend } from "react-icons/bs";
import Image1 from '../../images/Followers/Ellipse 19 (1).png'
import Image2 from '../../images/Followers/Ellipse 19 (2).png'
import Image3 from '../../images/Followers/Ellipse 19 (3).png'
import Image4 from '../../images/Followers/Ellipse 19.png'
import Image5 from '../../images/Followers/Ellipse 20.png'
import { ArrowLeft } from 'react-iconly'

const SellerFollowers = () => {
  const followersData = [
    {
      profileImg: Image1,
      followerName: 'John Doe',
    //   messageCount: 7,
    },
    {
      profileImg: Image2,
      followerName: 'Jane Smith',
      messageCount: 12,
    },
    {
      profileImg: Image3,
      followerName: 'Jane Smith',
      messageCount: 12,
    },
    {
      profileImg: Image4,
      followerName: 'Jane Smith',
      messageCount: 12,
    },
    {
      profileImg: Image5,
      followerName: 'Jane Smith',
      messageCount: 12,
    },
  ];

  const renderFollowerCards = () => {
    return (
      <div className="grid grid-cols-2 gap-4">
        {followersData.map((follower, index) => (
          <SellerFollowersCard
            key={index}
            profileImg={follower.profileImg}
            followerName={follower.followerName}
            messageCount={follower.messageCount}
          />
        ))}
      </div>
    );
  };

  return <div className='p-[20px] pl-[40px]'>
    <div  className='seller-post-title mb-[30px]'>
    <div className='seller-post-back-nav'>
          <ArrowLeft size={32} stroke='light' />
        </div>
        <div className='seller-follower-title-content   '>

          Followers
        </div>
    </div>
    {renderFollowerCards()}
    </div>;
};

export default SellerFollowers;
