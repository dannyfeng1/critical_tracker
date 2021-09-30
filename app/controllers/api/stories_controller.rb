class Api::StoriesController < ApplicationController
  def index
    @stories = Project.find_by(id: params[:projectId]).stories
    @user_assigned_stories = current_user.assigned_stories.where(project_id: params[:projectId])
    render :index
  end

  def show
    @story = Story.find_by(id: params[:id])
    render :show
  end

  def create
    @story = Story.new(story_params)
    if @story.save
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @story = Story.find_by(id: params[:id])
    if story
      @story.destroy
    else
      render json: ["Story does not exist."]
    end
  end

  private
  def story_params
    params.require(:story).permit(:title, :description, :story_type, :story_state, :priority, :points, :story_owner_id, :project_id)
  end
end
