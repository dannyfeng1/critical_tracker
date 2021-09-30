class AssignedStory < ApplicationRecord
  belongs_to :story,
    foreign_key: :story_id,
    class_name: "Story"

  belongs_to :assigned_user,
    foreign_key: :assigned_user_id,
    class_name: "User"
end
