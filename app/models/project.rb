class Project < ApplicationRecord
  validates :title, :project_owner_id, presence: true



  belongs_to :owner,
    foreign_key: :project_owner_id,
    class_name: "User"

  has_many :team_members,
    foreign_key: :project_id,
    class_name: "ProjectTeam",
    dependent: :destroy
    
end
