json.extract! @story, :id, :title, :description, :story_type, :story_state, :priority, :points, :story_owner_id
json.author @owner
json.assignedUser @story.user_assigned.username
json.currentUser current_user.username
