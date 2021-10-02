class Api::AssignedStoriesController < ApplicationController
  def create
    @story = Story.find_by(id: params[:storyId])
    assigned_story = AssignedStory.create(assigned_user_id: current_user.id, story_id: @story.id)
    @owner = assigned_story.assigned_user.username
    render :show
  end
end
