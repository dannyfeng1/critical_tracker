backlog = []
icebox = []
done = []

@stories.each do |story|
  if story.story_state == "Finished"
    done.push(story)
  elsif story.priority == false
    icebox.push(story)
  else
    backlog.push(story) 
  end
end

json.backlog do 
  backlog.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :description, :story_type, :story_state, :priority, :points, :story_owner_id
    end
  end
end

json.icebox do
  icebox.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :description, :story_type, :story_state, :priority, :points, :story_owner_id
    end
  end
end

json.done do
  done.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :description, :story_type, :story_state, :priority, :points, :story_owner_id
    end
  end
end

json.myWork do
  @user_assigned_stories.each do |story|
    json.set! story.id do
      json.extract! story, :id, :title, :description, :story_type, :story_state, :priority, :points, :story_owner_id
    end
  end
end