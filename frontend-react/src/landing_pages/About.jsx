import React from 'react'


import next_icon from '../assets/next-icon.png'
import back_icon from '../assets/back-icon.png'
import member1 from '../assets/team_members/member1.jpeg'
import member2 from '../assets/team_members/member2.jpeg'
import member3 from '../assets/team_members/member3.jpeg'
import member4 from '../assets/team_members/member4.jpeg'
import member5 from '../assets/team_members/member5.jpeg'

function About() {
    return <>
        <div className="apna-a-about">
            <img src={next_icon} alt = "" className='apna-a-next-btn' />
            <img src={back_icon} alt = "" className='apna-a-back-btn' />
            <div className="apna-a-slider"> </div>
        </div>
    </>
}

export default About;