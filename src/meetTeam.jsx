import React from 'react';
import teamMember1 from './images/team_member_1.jpg';
import teamMember2 from './images/team_member_2.jpg';
import teamMember3 from './images/team_member_3.jpg';
import './MeetTeam.css';

function MeetTeam() {
  return (
    <div className="meet-team">
      <h2 className="team-title">Meet Our Team</h2>
      <div className="team-photos">
        <div className="team-member">
          <img src={teamMember1} alt="Team Member 1" />
          <p className="team-member-name"><strong>Katarina Radosavljevic</strong></p>
          <p className="team-member-role"><em>CTO</em></p>
        </div>
        <div className="team-member">
          <img src={teamMember2} alt="Team Member 2" />
          <p className="team-member-name"><strong>Jelena Aleksic</strong></p>
          <p className="team-member-role"><em>CCO</em></p>
        </div>
        <div className="team-member">
          <img src={teamMember3} alt="Team Member 3" />
          <p className="team-member-name"><strong>Danica Trajic</strong></p>
          <p className="team-member-role"><em>Lead Data Scientist</em></p>
        </div>
      </div>
    </div>
  );
}

export default MeetTeam;



