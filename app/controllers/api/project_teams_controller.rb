class Api::ProjectTeamsController < ApplicationController
  def show
    @members = Project.find_by(id: params[:id]).team_members
    render :show
  end
  
  def create
    user = User.find_by(username: params[:form][:username])

    if user.nil?
      render json: ["User does not exist."], status: 401
    else
      @membership = ProjectTeam.new(user_id: user.id, project_id: params[:form][:project_id])

      if @membership.save
        render :new_member
      else
        render json: ["User is already in this project."], status: 422
      end
    end
  end

  def delete

  end
end
