class Api::MyStoriesController < ApplicationController
  def index
    @stories = current_user.assigned_stories
    render :index
  end
end
