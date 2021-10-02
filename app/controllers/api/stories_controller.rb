class Api::StoriesController < ApplicationController
  def index
    @stories = Story.includes(:story_owner, :story_assigned).where(project_id: params[:projectId])
    @user_assigned_stories = current_user.assigned_stories.where(project_id: params[:projectId]).where.not(stories: {story_state: "Finished"})
    render :index
  end

  def create
    @story = Story.new(story_params)
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def update
    @story = Story.find_by(id: params[:story][:id])
    if @story.update(story_params)
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @story = Story.find_by(id: params[:id])
    if story
      @story.destroy
      render :show
    else
      render json: ["Story does not exist."]
    end
  end

  private
  def story_params
    params.require(:story).permit(:title, :description, :story_type, :story_state, :priority, :points, :story_owner_id, :project_id)
  end
end
