import React from 'react'
import './footer.css';
import { NavLink } from "react-router-dom";

export const Footer = () => {
    return (
        <>
           <footer>
	<div class="content">
		<div class="top">
			<div class="logo-details">
				<span class="logo_name">
					<h1>LOGO</h1>
                {/* <img
              src="/images/logo1.png"
              alt="logo"
            /> */}
                </span>
			</div>
			<div class="media-icons">
				<NavLink to="#"><i class="fab fa-facebook-square"></i></NavLink>
				<NavLink to="#"><i class="fab fa-twitter"></i></NavLink>
				<NavLink to="#"><i class="fab fa-instagram"></i></NavLink>
				<NavLink to="#"><i class="fab fa-linkedin"></i></NavLink>
			</div>
		</div>
		<div class="link-boxes">
			<ul class="box">
				<li class="link_name">Links</li>
				<li><NavLink to="/">Home</NavLink></li>
				<li><NavLink to="/contact">Contact</NavLink></li>
				<li><NavLink to="/about">About Us</NavLink></li>
				<li><NavLink to="/">Get Started</NavLink></li>
			
			</ul>
			<ul class="box">
				<li class="link_name">Services</li>
				<li><NavLink to="#">Lorem Lypsm</NavLink></li>
				<li><NavLink to="#">Lorem Lypsm</NavLink></li>
				<li><NavLink to="#">Lorem Lypsm</NavLink></li>
				<li><NavLink to="#">Lorem Lypsm</NavLink></li>
			
			</ul>
	<ul class="box">
				<li class="link_name">Other services</li>
				<li><NavLink to="#">Lorem Lypsm</NavLink></li>
				<li><NavLink to="#">Lorem Lypsm</NavLink></li>
				<li><NavLink to="#">Lorem Lypsm</NavLink></li>
				<li><NavLink to="#">Lorem Lypsm</NavLink></li>
			
			</ul>
			<ul class="box">
				<li class="link_name">Contact</li>
				<li><NavLink to="#">+91 987654321</NavLink></li>
				<li><NavLink to="#">+91 987654321</NavLink></li>
			</ul>
		</div>
	</div>
	    <div class="bottom-details">
      <div class="bottom_text">
        <span class="copyright_text">Copyright © 2021</span>
        <span class="policy_terms">
          <NavLink to="#">Privacy policy</NavLink>
          
        </span>
      </div>
    </div>
</footer>
        </>
    )
}
