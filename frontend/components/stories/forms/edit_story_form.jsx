import React from "react";
import StoryDetails from "../story_details";

class EditStoryForm extends React.Component {
  constructor(props) {
    super(props);
    let { title, description, story_type, assignedUser, id, points, storyState} = this.props.story
    this.state = {
      id: id,
      title: title,
      description: description,
      story_type: story_type,
      points: points,
      assign_to: assignedUser,
      story_state: storyState
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateStory(this.state);
    if (this.state.assign_to === this.props.currentUser) {
      this.props.formType === "Backlog" ? this.props.assignBacklog(this.state.id) : this.props.assignIcebox(this.state.id)
    }
    this.props.clearErrors();
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  render() {
    let { story, currentUser } = this.props;
    let { id, title, description, story_type, points, assign_to, story_state } = this.state;

    if (story.author === currentUser) {
      return (
        <div className="edit-story-container">
          <form>
            <label>Title:
              <input type="text" onChange={this.update("title")} value={title}/>
            </label>
            <label>Label:
              <select onChange={this.update("story_type")} value={story_type}>
                <option value="Features">Features</option>
                <option value="Started">Bugs</option>
                <option value="Chore">Chore</option>
                <option value="Release">Release</option>
              </select>
            </label>
            <label>Assign to:
              <select onChange={this.update("assign_to")} value={assign_to}>
                <option value=" ">None</option>
                {this.props.teamMembers.map(teamMember => 
                  <option key={teamMember.id}value={`${teamMember.username}`}>{`${teamMember.username}`}</option>
                  )}
              </select>
            </label>
            <label>Status:
              <select onChange={this.update("story_state")} value={story_state}>
                <option value="Unstarted">Unstarted</option>
                <option value="Started">Started</option>
                <option value="Finished">Finished</option>
              </select>
            </label>
            <label>Points:
              <select onChange={this.update("points")} value={points}>
                  <option value={0} >0 Points</option>
                  <option value={1}>1 Point</option>
                  <option value={2}>2 Points</option>
                  <option value={3}>3 Points</option>
                  <option value={4}>4 Points</option>
                </select>
              </label>
              <label>Description:
                <textarea placeholder="Description" id="" cols="30" rows="5" onChange={this.update("description")} value={description}></textarea>
              </label>
            <button onClick={this.handleSubmit}>Save</button>
            <button onClick={() => this.props.deleteStory(story.id)}>Delete</button>
          </form>
        </div>
      )
    } else {
      return (
        <StoryDetails story={story} />
      )
    }
  }

}

export default EditStoryForm