class Project < ApplicationRecord
  validates :title, :project_owner_id, presence: true

  belongs_to :project_owner,
    foreign_key: :project_owner_id,
    class_name: "User"
    
end
