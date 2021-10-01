json.set! @story.id do
  json.extract! @story, :id, :title, :description, :story_type, :story_state, :priority, :points, :story_owner_id
end

json.assignedUserId do
  @assignment.assigned_user_id
end