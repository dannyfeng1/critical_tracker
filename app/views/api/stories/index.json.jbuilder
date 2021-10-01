backlog = []
icebox = []
finished = []

@stories.each do |story|
  if story.story_state == "Finished"
    finished.push(story)
  elsif story.priority == false
    icebox.push(story)
  else
    backlog.push(story) 
  end
end

json.backlog do 
  backlog.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :description, :story_type, :story_state, :priority, :points
      json.assignedUserId story.story_assigned.assigned_user_id if story.story_assigned
      json.storyOwner story.story_owner.username
    end
  end
end

json.icebox do
  icebox.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :description, :story_type, :story_state, :priority, :points
      json.assignedUserId story.story_assigned.assigned_user_id if story.story_assigned
      json.storyOwner story.story_owner.username
    end
  end
end

json.finished do
  finished.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :description, :story_type, :story_state, :priority, :points, :updated_at
      json.assignedUserId story.story_assigned.assigned_user_id if story.story_assigned
      json.storyOwner story.story_owner.username
    end
  end
end

json.myWork do
  @user_assigned_stories.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :description, :story_type, :story_state, :priority, :points
      json.assignedUserId story.story_assigned.assigned_user_id
      json.storyOwner story.story_owner.username

      # json.order do
        # story.story_assigned.work_order
      # end
    end
  end
end
# add story_order columns and extract as well