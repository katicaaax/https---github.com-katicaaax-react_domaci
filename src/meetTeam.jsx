import React from 'react';
import teamMember1 from './images/team_member_1.jpg';
import teamMember2 from './images/team_member_2.jpg';
import teamMember3 from './images/team_member_3.jpg';

function MeetTeam() {
  return (
    <div className="meet-team">
      <h2>Meet Our Team</h2>
      <div className="team-photos">
        <div className="team-member">
          <img src={teamMember1} alt="Team Member 1" />
          <p>John Doe</p>
        </div>
        <div className="team-member">
          <img src={teamMember2} alt="Team Member 2" />
          <p>Jane Smith</p>
        </div>
        <div className="team-member">
          <img src={teamMember3} alt="Team Member 3" />
          <p>Alex Johnson</p>
        </div>
      </div>
    </div>
  );
}

export default MeetTeam;

