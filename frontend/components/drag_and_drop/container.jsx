import React from 'react';
import styled from 'styled-components';
import { Droppable, Draggable } from 'react-beautiful-dnd';
import StoryItemContainer from '../stories/story_item_container'

const StoryBox = styled.div`
    margin: 5px;
    margin-top: 5px;
    border-radius: 5px;
    overflow: auto;
`;

export default class Container extends React.Component {
  render() {

    // console.log(this.props);
    
    return (
      <div>
        <Droppable droppableId={this.props.container.id}>
          {provided => (
            <StoryBox>
                <div className="story-list"
                ref={provided.innerRef} 
                {...provided.droppableProps}
                >
                    {this.props.stories.map((story, index) => (
                      <Draggable key={story.id} draggableId={story.id.toString()} index={index}>
                        {provided => (
                          <div
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          ref={provided.innerRef}
                          >
                            <StoryItemContainer formType={this.props.formType} key={story.id} story={story} index={index} />
                          </div>
                        )}

                      </Draggable>
                    ))}
                {provided.placeholder}
                </div>
            </StoryBox>
          )}
        </Droppable>
      </div>
    );
  }
}
