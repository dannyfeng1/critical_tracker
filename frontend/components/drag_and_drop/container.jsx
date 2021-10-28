import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import StoryItemContainer from '../stories/story_item_container'

export default class Container extends React.Component {
  render() {
    return (
      <div>
        <Droppable droppableId={this.props.container.id}>
          {provided => (
            <ul innerRef={provided.innerRef} {...provided.droppableProps}>
              {this.props.stories.map((story, index) => (
                <StoryItemContainer key={story.id} story={story} index={index} formType={this.props.container.id}/>
              ))}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </div>
    );
  }
}
