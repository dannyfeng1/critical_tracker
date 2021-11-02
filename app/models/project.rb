class Project < ApplicationRecord
  validates :title, :project_owner_id, presence: true

  belongs_to :owner,
    foreign_key: :project_owner_id,
    class_name: "User"

  has_many :users,
    foreign_key: :project_id,
    class_name: "ProjectTeam",
    dependent: :destroy

  has_many :stories,
    foreign_key: :project_id,
    class_name: "Story",
    dependent: :destroy

  has_many :team_members, 
    through: :users,
    source: :member

  has_one :project_order,
    foreign_key: :project_id,
    class_name: "ProjectOrder"
  
end
