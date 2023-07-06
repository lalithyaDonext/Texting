import React from 'react';
import './posts.css'; 
import { BsArrowLeft, BsPlus, BsChevronRight } from "react-icons/bs";
import { ChevronRight} from 'react-iconly'
const Posts = () => {
  return (
    <div className='seller-post-container'>
      <div className='seller-post-title'>
        <div className='seller-post-back-nav'>
          <BsArrowLeft size={32} />
        </div>
        <div className='seller-post-title-content'>
          Add New Post
        </div>
      </div>
      <div className='seller-post-main-card'>
        <div className='post-main-card'>
          <div className='post-main-card-title'>
            Add Product Images
          </div>
          <div className='post-main-card-image-upload-container'>
            <div className='image-upload-large-card'>
              <p>
                Click to add images or Video <br/>
                Drag and drop here
              </p> 
            </div>
            <div className='image-upload-small-card-set'>
              <div className='image-upload-small-card'>
                <BsPlus size={42} className='plus-icon' />
                <p>
                  Click to add images or Video <br/>
                  Drag and drop here
                </p> 
              </div>
              <div className='image-upload-small-card'>
                <BsPlus size={42} className='plus-icon' />
                <p>
                  Click to add images or Video <br/>
                  Drag and drop here
                </p> 
              </div>
              <div className='image-upload-small-card'>
                <BsPlus size={42} className='plus-icon' />
                <p>
                  Click to add images or Video <br/>
                  Drag and drop here
                </p> 
              </div>
              <div className='image-upload-small-card'>
                <BsPlus size={42} className='plus-icon' />
                <p>
                  Click to add images or Video <br/>
                  Drag and drop here
                </p> 
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='seller-post-next-button'>
        <button className='next-button'>
          Next <ChevronRight size={24}  />
        </button>
      </div>
    </div>
  );
}

export default Posts;
