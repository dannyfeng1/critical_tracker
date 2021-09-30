class Api::ProjectTeamsController < ApplicationController
  def show
    @members = Project.find_by(id: params[:id]).team_members
    render :show
  end
  
  def create
    user = User.find_by(username: params[:form][:username])
    @membership = ProjectTeam.new(user_id: user.id, project_id: params[:form][:project_id])

    if @membership.save
      render :new_member
    else
      render @membership.errors.full_messages, status: 422
    end
  end

  def delete

  end
end
