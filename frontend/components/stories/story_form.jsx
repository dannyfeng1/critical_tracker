import React from 'react';

class StoryForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      description: "",
      story_type: "Choose a Tag",
      story_state: "Unstarted",
      priority: this.props.priority,
      points: null,
      story_owner_id: this.props.currentUser,
      project_id: this.props.projectId
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    if (this.props.formType === "MyWork") {
      this.props.createStory(this.state)
      .then(story => this.props.assignStory(story.id))
    } else {
      this.props.createStory(this.state);
    }
  }
  
  update(field) {
    return e => this.setState({[field]: e.target.value})
  }

  render() {
    let { title, description, story_type, points } = this.state;
    
    return (
      <div id="story-create-container">
        <form className="story-form">
          <input type="text" placeholder="Title" onChange={this.update("title")} value={title}/>
          <select onChange={this.update("story_type")} value={story_type}>
            <option value="Choose a Tag">Choose a Tag</option>
            <option value="Features">Features</option>
            <option value="Bugs">Bugs</option>
            <option value="Chore">Chore</option>
            <option value="Release">Release</option>
          </select>
          <textarea placeholder="Description" id="" cols="30" rows="5" onChange={this.update("description")} value={description}></textarea>
          <button onClick={this.handleSubmit}>Create Story</button>
          <button>Cancel</button>
        </form>
      </div>
    )

  }

}

export default StoryForm;