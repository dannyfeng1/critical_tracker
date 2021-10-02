class Api::AssignedStoriesController < ApplicationController
  def create
    @story = Story.find_by(id: params[:storyId])
    @assignment = AssignedStory.includes(:story, :assigned_user)create(assigned_user_id: current_user.id, story_id: @story.id)
    render :show
  end
end
