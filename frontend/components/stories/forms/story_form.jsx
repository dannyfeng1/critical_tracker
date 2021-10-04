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
      story_owner_id: this.props.currentUser,
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
            <option value="">None</option>
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
              <option value="" >Select an option</option>
              <option value="Features">Features</option>
              <option value="Bugs">Bugs</option>
              <option value="Chore">Chore</option>
              <option value="Release">Release</option>
            </select>
          </label>
          {assignInput}
          <textarea placeholder="Description" id="" cols="30" rows="5" onChange={this.update("description")} value={description}></textarea>
          <button onClick={this.handleSubmit}>Create Story</button>
        </form>
      </div>
    )
  }
}

export default StoryForm;