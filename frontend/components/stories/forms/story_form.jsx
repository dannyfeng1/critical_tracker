import React from 'react';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      story_type: "",
      story_state: "Unstarted",
      priority: this.props.priority,
      points: null,
      story_owner_id: this.props.currentUser.id,
      project_id: this.props.projectId,
      assign_to: "-"
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === "MyWork") {
      this.props.createStory(this.state)
      .then(action => this.props.assignStory(action.story.id))
    } else {
      this.props.createStory(this.state);
    }
    if (this.state.assign_to === this.props.currentUser.username) {
      this.props(assi)
    }
    this.props.clearErrors();
  }
  
  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  render() {
    let { title, description, story_type, points, assign_to } = this.state;
    
    let assignInput = null;
    if (this.props.formType !== "MyWork") {
      assignInput = (
        <label>Assign to:
          <select onChange={this.update("assign_to")} value={assign_to}>
            <option value=" ">None</option>
            {this.props.teamMembers.map(teamMember => 
              <option key={teamMember.id}value={`${teamMember.username}`}>{`${teamMember.username}`}</option>
              )}
          </select>
        </label>
      )
    }

    return (
      <div id="story-create-container">
        <form className="story-form">
          <input type="text" placeholder="Title" onChange={this.update("title")} value={title}/>
          <label>Label:
            <select onChange={this.update("story_type")} value={story_type}>
              <option value=" " >Select an option</option>
              <option value="Features">Features</option>
              <option value="Bugs">Bugs</option>
              <option value="Chore">Chore</option>
              <option value="Release">Release</option>
            </select>
          </label>
          {assignInput}
          <label>Points:
          <select onChange={this.update("points")} value={points}>
              <option value={0} >0 Points</option>
              <option value={1}>1 Point</option>
              <option value={2}>2 Points</option>
              <option value={3}>3 Points</option>
              <option value={4}>4 Points</option>
            </select>
          </label>
          <textarea placeholder="Description" id="" cols="30" rows="5" onChange={this.update("description")} value={description}></textarea>
          <button onClick={this.handleSubmit}>Create Story</button>
        </form>
      </div>
    )
  }
}

export default StoryForm;