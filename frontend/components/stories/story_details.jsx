import React from 'react';

const StoryDetails = ({ story }) => {
  return (
    <div className="story-details">
      <h1>{story.storyType}: {story.title}</h1>
      <h2>Created by: {story.author}</h2>
      {story.assignedUser ? <h2>Assigned To: {story.assignedUser}</h2> : <h2>Assigned To: N/A</h2>}
      <h2>Status: {story.storyState}</h2>
      <h2>Points: {story.points}</h2>
      <p>Description: {story.description}</p>
    </div>
  )
}

export default StoryDetails