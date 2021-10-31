import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from '../drag_and_drop/container';

class DoneStories extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      stories: this.props.finished,
      containers: {
        finished: {
          id: "finished",
          storyIds: Object.keys(this.props.finished)
        }
      },
      containerOrder: ["finished"]
    };
  }

  componentDidUpdate(prevProps) {
    if (prevProps.finished !== this.props.finished) {
      this.setState({
        createForm: false,
        stories: this.props.finished,
        containers: {
          finished: {
            id: "finished",
            storyIds: Object.keys(this.props.finished)
          }
        },
        containerOrder: ["finished"]
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

    let { finished } = this.props
    return (
      <div className="story-box">
        <div className="story-container-header">
          <h1 id="done-header">Done</h1>
        </div>
        <DragDropContext onDragEnd={this.onDragEnd}>
          {this.state.containerOrder.map(containerId => {
          const container = this.state.containers[containerId];
          const stories = container.storyIds.map(storyId => this.state.stories[storyId]);    
          return <Container key={container.id} container={container} stories={stories} />;
          })}
        </DragDropContext>
      </div>
    )
  }
}

export default DoneStories;