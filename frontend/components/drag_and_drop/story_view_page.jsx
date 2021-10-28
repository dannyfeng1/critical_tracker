import React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import Container from './container';
import { connect } from "react-redux";

const mapStateToProps = state => ({
    backlog: state.entities.stories.backlog,
    icebox: state.entities.stories.icebox,
    myWork: state.entities.stories.myWork,
    finished: state.entities.stories.finished,
    allStories: state.entities.stories,
})
// props available: currentUser, projectId, presence for each container

class DndView extends React.Component {
    componentDidMount() {
        let { backlog, icebox, myWork, finished, allStories } = this.props;

        this.state = {
            stories: {
                allStories
            },
            containers: {
                'Backlog': {
                    id: "Backlog",
                    storyIds: Object.keys(backlog)
                },
                'Icebox': {
                    id: "Icebox",
                    storyIds: Object.keys(icebox)
                },
                'MyWork': {
                    id: "MyWork",
                    storyIds: Object.keys(myWork)
                },
                'Finished': {
                    id: "Finished",
                    storyIds: Object.keys(finished)
                }
            },
            containerOrder: ['backlog', 'icebox', 'myWork', 'finished']
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
    
        const column = this.state.columns[source.droppableId];
        const newTaskIds = Array.from(column.taskIds);
        newTaskIds.splice(source.index, 1);
        newTaskIds.splice(destination.index, 0, draggableId);
    
        const newColumn = {
          ...column,
          taskIds: newTaskIds,
        };
    
        const newState = {
          ...this.state,
          columns: {
            ...this.state.columns,
            [newColumn.id]: newColumn,
          },
        };
    
        this.setState(newState);
    };

    render() {
        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                {this.state.containerOrder.map(containerId => {
                const container = this.state.containers[containerId];
                const stories = container.storyIds.map(storyId => this.state.stories[storyId]);

                return <Container key={container.id} container={container} stories={stories} />;
                })}
            </DragDropContext>
        )
    }

}

export default connect(mapStateToProps, null)(DndView);