import React from "react";
import StoryDetails from "../story_details";

class EditStoryForm extends React.Component {
  constructor(props) {
    super(props);
    let { title, description, story_type, assignedUser, id, points, storyState, priority} = this.props.story
    this.state = {
      id: id,
      title: title,
      description: description,
      story_type: story_type,
      points: points,
      assign_to: assignedUser,
      story_state: storyState,
      priority: priority
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateStory(this.state)
    .then(() => this.props.clearErrors())
  }

  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }


  render() {
    let { story, currentUser } = this.props;
    let { id, title, description, story_type, points, assign_to, story_state } = this.state;

    let priorityInput = null;
    if (this.props.formType === "MyWork") {
      priorityInput = (
        <div>Prioritize:
          <input type="radio" name="priority" defaultChecked={this.state.priority} onClick={() => this.setState({priority: true})}/> Yes
          <input type="radio" name="priority" defaultChecked={!this.state.priority} onClick={() => this.setState({priority: false})}/> No
        </div>
      )
    }

    if (story.author === currentUser) {
      return (
        <div className="edit-story-container">
          <form>
            <label>Title:
              <input type="text" onChange={this.update("title")} value={title}/>
            </label>
            <label>Label:
              <select onChange={this.update("story_type")} value={story_type}>
                <option value="Feature">Feature</option>
                <option value="Bug">Bug</option>
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
            {priorityInput}
            <label>Description:
              <textarea placeholder="Description" id="" cols="30" rows="5" onChange={this.update("description")} value={description}></textarea>
            </label>
            <div className="buttons-div">
              <button onClick={this.handleSubmit}>Save</button>
              <button onClick={() => this.props.deleteStory(story.id)}>Delete</button>
            </div>
            <ul>
              {this.props.errors.map((error, i) => <li className="errors" key={i}>{error}</li>)}
            </ul>
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