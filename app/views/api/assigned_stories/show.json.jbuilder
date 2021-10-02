json.set! @story.id do
  json.extract! @story, :id, :title, :description, :story_type, :story_state, :priority, :points, :story_owner_id
  json.owner @assignement.assigned_user.username
end