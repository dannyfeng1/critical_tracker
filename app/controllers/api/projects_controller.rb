class Api::ProjectsController < ApplicationController
  before_action :current_user

  def index
    @teams = current_user.teams
    render :index 
  end

  def create
    @project = Project.new(project_params)
    if @project.save
      ProjectTeam.create(user_id: current_user.id, project_id: @project.id)
      render :show
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def show
    @project = Project.find_by(id: params[:id])
    if @project
      render :show
    else
      render json: ["Project does not exist or you do not have access."]
    end
  end

  def update
    @project = Project.find_by(id: params[:id])

    if @project.nil?
      render json: ["Project does not exist."], status: 404
    end

    if @project.update(project_params)
      render :show
    else
      render json: @project.errors.full_messages, status: 401
    end
  end

  def destroy
    @project = Project.find_by(id: params[:id])
    if @project
      @project.destroy
    else
      render json: ["No project with that id."], status: 404
    end
    
  end

  private
  def project_params
    params.require(:project).permit(:title, :description, :project_owner_id)
  end
end
