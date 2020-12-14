import React from 'react'

// Import Style
import './personal-detail.css'

// Import Sources
import { profile } from '../../../source'

// Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'




export default function PersonalDetail(props) {
  return (
      <>
        <ul class="profile-detail">
            <li class="profile-detail__row">
                <span class="profile-detail__text profile-detail__text--opacity">Name:</span>
                <span class="profile-detail__text">{props.profileData.name}</span>                               
            </li>
            <li class="profile-detail__row">
                <span class="profile-detail__text profile-detail__text--opacity">Apellido:</span>
                <span class="profile-detail__text">{props.profileData.lastName}</span>                               
            </li>
            <li class="profile-detail__row">
                <span class="profile-detail__text profile-detail__text--opacity">Age:</span>
                <span class="profile-detail__text">{props.profileData.age}</span>
            </li>
            <li class="profile-detail__row">
                <span class="profile-detail__text profile-detail__text--opacity">Nationality:</span>
                <span class="profile-detail__text">{props.profileData.nationality}</span>
            </li>
            <li class="profile-detail__row">
                <span class="profile-detail__text profile-detail__text--opacity">Feelance:</span>
                <span class="profile-detail__text">{props.profileData.freelance}</span>
            </li>
            <li class="profile-detail__row">
                <span class="profile-detail__text profile-detail__text--opacity">Address:</span>
                <span class="profile-detail__text">Colombia</span>
            </li>
            <li class="profile-detail__row">
                <span class="profile-detail__text profile-detail__text--opacity">Phone:</span>
                <span class="profile-detail__text">+57 3115890050</span>
            </li>
            <li class="profile-detail__row">
                <span class="profile-detail__text profile-detail__text--opacity">Email:</span>
                <span class="profile-detail__text">maurogebe.96@gmail.com</span>
            </li>
            <li class="profile-detail__row">
                <span class="profile-detail__text profile-detail__text--opacity">Lenguage:</span>
                <span class="profile-detail__text">Spanish</span>
            </li>
        </ul>
        <a class="button-download" href="">
            <FontAwesomeIcon className="button-download__icon" icon={faDownload} />
            <span class="button-download__text">DOWNLOAD CV</span>
        </a>
      </>
  );
}