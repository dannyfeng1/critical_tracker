import React from 'react';
import BacklogFormContainer from './forms/back_log_form_container';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from '../drag_and_drop/container';

class Backlog extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   createForm: false,
    //   stories: this.props.backlog,
    //   containers: {
    //     backlog: {
    //       id: "backlog",
    //       storyIds: this.props.storyOrder.backlog 
    //     }
    //   },
    //   containerOrder: ["backlog"]
    // };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.backlog !== this.props.backlog) {
      this.setState({
        createForm: false,
        stories: this.props.backlog,
        containers: {
          backlog: {
            id: "backlog",
            storyIds: this.props.storyOrder.backlog.length === 0 ? Object.keys(this.props.backlog) : this.props.storyOrder.backlog 
          }
        },
        containerOrder: ["backlog"]
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

    this.props.updateOrder({
      id: this.props.storyOrder.id,
      backlog: newState.containers.backlog.storyIds
    })
    this.setState(newState);
  };

  render() {
    if (!this.props.presence || !this.state) {
      return null;
    }

    let { projectId } = this.props;
    return (
      <div className="story-box">
        <BacklogFormContainer projectId={projectId}/>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.containerOrder.map(containerId => {

          const container = this.state.containers[containerId];
          const stories = container.storyIds.map(storyId => this.state.stories[storyId]);    

          return <Container key={container.id} container={container} stories={stories} formType="Backlog" />;
          })}
        </DragDropContext>
        {/* <div className="story-list">
          {backlog.map(story => <StoryItemContainer key={story.id} story={story} formType="Backlog"/>)}
        </div> */}
      </div>
    )
  }
}

export default Backlog;