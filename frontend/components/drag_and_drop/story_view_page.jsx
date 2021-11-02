import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from './container';
import { connect } from "react-redux";
import styled from 'styled-components'

const StoriesContainer = styled.div`
    display: flex;
    flex-direction: row;
    height: 86.4vh;
    width: 85vw;
    justify-content: flex-start;
`;
const mapStateToProps = state => ({
    backlog: state.entities.stories.backlog,
    icebox: state.entities.stories.icebox,
    myWork: state.entities.stories.myWork,
    finished: state.entities.stories.finished,
    // allStories: state.entities.stories,
})
// props available: currentUser, projectId, presence for each container

class DndView extends React.Component {
    componentDidUpdate(prevProps) {
        if (this.props !== prevProps) {
            let { backlog, icebox, myWork, finished } = this.props;
            const stories = Object.assign({}, backlog, icebox, myWork, finished)
            this.setState({
                stories,
                containers: {
                    backlog: {
                        id: "Backlog",
                        storyIds: Object.keys(backlog)
                    },
                    icebox: {
                        id: "Icebox",
                        storyIds: Object.keys(icebox)
                    },
                    myWork: {
                        id: "MyWork",
                        storyIds: Object.keys(myWork)
                    },
                    finished: {
                        id: "Finished",
                        storyIds: Object.keys(finished)
                    }
                },
                containerOrder: ['myWork', 'backlog', 'icebox', 'finished']
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
        if (!this.state) return null;
        // console.log(this.state)
        // console.log(this.props)
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <StoriesContainer id="stories-container">
                    {this.state.containerOrder.map(containerId => {
                    const container = this.state.containers[containerId];
                    const stories = container.storyIds.map(storyId => this.state.stories[storyId]);    
                    return <Container key={container.id} container={container} stories={stories} />;
                    })}
                </StoriesContainer>
            </DragDropContext>
        )
    }

}

export default connect(mapStateToProps, null)(DndView);