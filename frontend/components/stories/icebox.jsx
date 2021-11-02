import React from 'react';
import IceboxFormContainer from './forms/icebox_form_container';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from '../drag_and_drop/container';

class Icebox extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {
    //   createForm: false,
    //   stories: this.props.icebox,
    //   containers: {
    //     icebox: {
    //       id: "icebox",
    //       storyIds: Object.keys(this.props.icebox)
    //     },
    //   },
    //   containerOrder: ["icebox"]
    // };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.icebox !== this.props.icebox) {
      this.setState({
        createForm: false,
        stories: this.props.icebox,
        containers: {
          icebox: {
            id: "icebox",
            storyIds: this.props.storyOrder.icebox.length === 0 ? Object.keys(this.props.icebox) : this.props.storyOrder.icebox
          }
        },
        containerOrder: ["icebox"]
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
      icebox: newState.containers.icebox.storyIds
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
        <IceboxFormContainer projectId={projectId}/> 
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.containerOrder.map(containerId => {
          const container = this.state.containers[containerId];
          const stories = container.storyIds.map(storyId => this.state.stories[storyId]);    
          return <Container key={container.id} container={container} stories={stories} formType="Icebox" />;
          })}
        </DragDropContext>
        {/* <div className="story-list">
          {icebox.map(story => <StoryItemContainer key={story.id} story={story} formType="Icebox"/>)}
        </div> */}
      </div>
    )
  }
}

export default Icebox;