class Story < ApplicationRecord
  validates :title, :story_type, :story_state, :story_owner_id, :project_id, presence: :true
  validates :priority, inclusion: {in: [true, false]}

  belongs_to :story_owner,
    foreign_key: :story_owner_id,
    class_name: "User"

  belongs_to :project,
    foreign_key: :project_id,
    class_name: "Project"

  has_one :story_assigned, 
    foreign_key: :story_id,
    class_name: "AssignedStory",
    dependent: :destroy

  has_one :user_assigned,
    through: :story_assigned,
    source: :assigned_user

end