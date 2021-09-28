class ProjectTeam < ApplicationRecord
  validates :project_id, :user_id,  presence: true
  validates_uniqueness_of :project_id, scope: :user_id

  belongs_to :project,
    foreign_key: :project_id,
    class_name: "Project"

  belongs_to :member,
    foreign_key: :user_id,
    class_name: "User"
end
