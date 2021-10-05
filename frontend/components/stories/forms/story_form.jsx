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
      points: 0,
      story_owner_id: this.props.currentUser.id,
      project_id: this.props.projectId,
      assign_to: "-"
    };
    this.display = true;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.props.formType === "MyWork" || this.state.assign_to === this.props.currentUser.username) {
      this.props.createStory(this.state)
        .then(action => action.story.priority ? this.props.assignBacklog(action.story.id) : this.props.assignIcebox(action.story.id))
        .then(() => this.props.clearErrors())        
    } else {
      this.props.createStory(this.state)
      .then(() => this.props.clearErrors())
    }
    
  }
  
  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  render() {
    if (this.display === false) return null;
    let { title, description, story_type, points, assign_to } = this.state;
    console.log(this.state)
    
    let assignInput = null;
    let priorityInput = null;
    if (this.props.formType === "MyWork") {
      priorityInput = (
        <div>Prioritize:
          <input type="radio" name="priority" onClick={() => this.setState({priority: true})}/> Yes
          <input type="radio" name="priority" onClick={() => this.setState({priority: false})}/> No
        </div>
      )
    }
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
      <div className="story-create-container">
        <form className="story-form">
          <label>Title:
            <input type="text" onChange={this.update("title")} value={title}/>
          </label>
          <label>Story Type:
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
          {priorityInput}
          <label>Description:
            <textarea placeholder="Enter a desciption for this story" id="" cols="30" rows="5" onChange={this.update("description")} value={description}></textarea>
          </label>
          <button onClick={this.handleSubmit}>Create Story</button>
          <ul>
              {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </form>
      </div>
    )
  }
}

export default StoryForm;