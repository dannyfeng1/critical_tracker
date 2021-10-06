json.extract! @story, :id, :title, :description, :story_type, :story_state, :priority, :points, :story_owner_id
user_assigned = nil
if @story.user_assigned 
  user_assigned = @story.user_assigned.username
end
json.assignedUser user_assigned
json.author @story.story_owner.username
json.currentUser current_user.username