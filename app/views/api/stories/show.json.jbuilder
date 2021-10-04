json.extract! @story, :id, :title, :description, :story_type, :story_state, :priority, :points, :story_owner_id
json.assignedUser @story.user_assigned.username if @story.user_assigned
json.author @story.story_owner.username
json.currentUser current_user.username