import React, { useState } from 'react';
import styled from 'styled-components';

const ProfilePicture = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <ProfileWrapper>
      <div className="profile-pic-container">
        {selectedImage ? (
          <img src={selectedImage} alt="Profile" className="profile-pic" />
        ) : (
          <div className="placeholder">
            <span>Upload Image</span>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="file-input"
        />
      </div>
    </ProfileWrapper>
  );
};

export default ProfilePicture;

const ProfileWrapper = styled.div`
  .profile-pic-container {
    position: relative;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    overflow: hidden;
    border: 3px solid var(--clr-pink-normal);
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .profile-pic {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .placeholder {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: var(--clr-violet-dark-active);
      color: var(--clr-white);
      font-size: 14px;
      text-align: center;
    }

    .file-input {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      opacity: 0;
      cursor: pointer;
    }
  }
`;