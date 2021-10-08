class Api::StoriesController < ApplicationController
  def index
    @stories = Story.includes(:story_owner, :user_assigned, :story_assigned).where(project_id: params[:projectId])
    @user_assigned_stories = Story.includes(:story_owner, :user_assigned, :story_assigned).joins(:project).where(projects: {id: params[:projectId]}).where(story_owner_id: current_user.id).where.not(story_state: "Finished")
    render :index
  end

  def create
    @story = Story.new(story_params)
    if @story.save
      assigned_user = User.find_by(username: params[:story][:assign_to])
      if assigned_user != current_user
        AssignedStory.create(assigned_user_id: assigned_user.id, story_id: @story.id) if assigned_user
      end
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end

  def update
    @story = Story.find_by(id: params[:story][:id])
    if @story.update(story_params)
      assigned_user = User.find_by(username: params[:story][:assign_to])
      @story.story_assigned.destroy if @story.story_assigned  
      AssignedStory.create(assigned_user_id: assigned_user.id, story_id: @story.id) if assigned_user
      render :show
    else
      render json: @story.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @story = Story.find_by(id: params[:id])
    if @story
      @story.destroy
      render :show
    else
      render json: ["Story does not exist."]
    end
  end

  private
  def story_params
    params.require(:story).permit(:id, :title, :description, :story_type, :story_state, :priority, :points, :story_owner_id, :project_id)
  end
end
