class Api::ProjectsController < ApplicationController
  before_action :current_user

  def index
    @teams = current_user.teams
    render :index 
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      render :show
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def show
    
  end

  def update

  end

  def destroy
    
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :project_owner_id)
  end
end
