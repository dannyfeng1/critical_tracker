import React from 'react';
import MyWorkFormcontainer from './forms/my_work_form_container';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from '../drag_and_drop/container';

class MyWork extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      createForm: false,
      stories: this.props.myWork,
      containers: {
        myWork: {
          id: "myWork",
          storyIds: Object.keys(this.props.myWork)
        }
      },
      containerOrder: ["myWork"]
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.myWork !== this.props.myWork) {
      this.setState({
        createForm: false,
        stories: this.props.myWork,
        containers: {
          myWork: {
            id: "myWork",
            storyIds: Object.keys(this.props.myWork)
          }
        },
        containerOrder: ["myWork"]
      })
    }
  }

  onDragEnd = result => {
    const { destination, source, draggableId } = result;

    if (!destination) {
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const container = this.state.containers[source.droppableId];
    const newStoryIds = Array.from(container.storyIds);
    newStoryIds.splice(source.index, 1);
    newStoryIds.splice(destination.index, 0, draggableId);

    const newContainer = {
      ...container,
      storyIds: newStoryIds,
    };

    const newState = {
      ...this.state,
      containers: {
        ...this.state.containers,
        [newContainer.id]: newContainer,
      },
    };

    this.setState(newState);
  };


  render() {
    if (!this.props.presence) {
      return null;
    }

    let { projectId } = this.props
    return (
      <div className="story-box">
        <MyWorkFormcontainer projectId={projectId}/> 
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.containerOrder.map(containerId => {
          const container = this.state.containers[containerId];
          const stories = container.storyIds.map(storyId => this.state.stories[storyId]);    
          return <Container key={container.id} container={container} stories={stories} formType="MyWork" />;
          })}
        </DragDropContext>
        {/* <div className="story-list">
          {myWork.map(story => <StoryItemContainer key={story.id} story={story} formType="MyWork"/>)}
        </div> */}
      </div>
    )
  }
}

export default MyWork;