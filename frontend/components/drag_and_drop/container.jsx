import React from 'react';
import styled from 'styled-components';
import { Droppable } from 'react-beautiful-dnd';
import StoryItemContainer from '../stories/story_item_container'

const StoryBox = styled.div`
    width: 20.5vw;
    height: 86.5vh;
    background-color: rgb(37, 35, 35);
    border: 2px solid rgb(62, 67, 73);
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
                        <StoryItemContainer key={story.id} story={story} index={index} formType={this.props.container.id}/>
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
