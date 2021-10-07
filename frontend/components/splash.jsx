import React from 'react';
import LogInSignUpContainer from '../components/user_auth/login_signup_container'

const SplashPage = props => {
  return (
    <div id="splash-page">
      <LogInSignUpContainer/>
      <div id="important-splash">
        <div>Critical Tracker is changing how teams build software—one story at a time.</div>
        <img src="https://assets.pivotaltracker.com/marketing_assets/shared_home/homepage_1-5a09ffa185d33da56aa911984a59e593f9fa25d5e2df4e7d06e796e85e121d3d.svg" alt="" />
      </div>
      <div className="wide-splash">
        <strong>Proven project management for successful teams</strong>
        <p>With a shared view of team priorities, a process that fosters collaboration, and dynamic tools to analyze progress, your team will deliver more frequently and consistently.</p>
      </div>
      <div>
        <img src="https://assets.pivotaltracker.com/marketing_assets/shared_home/homepage_2-0e7e15432bf84b9091920cf95f66f735f8b0844fa0198ec6f4ae56496155003f.svg" alt="" />
        <div>
          <strong>Tools to help you adapt and evolve</strong>
          <p>Get more work done, more often. Tracker's guided iteration planning helps you break down and prioritize projects into manageable chunks so the team can keep the momentum toward delivering.</p>
        </div>
      </div>
      {/* <div className="wide-splash">
        <strong>A better way to develop</strong>
        <p>Succeeding in an evolving tech landscape requires a time-tested process and a tool your team can rely on. Tracker's modern workflow helps your team keep the pace and adapt when needs change.</p>
      </div> */}
    </div>
  )
}

export default SplashPage