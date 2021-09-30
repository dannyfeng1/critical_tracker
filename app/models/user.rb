class User < ApplicationRecord
  validates :email, :password_digest, :username, :first_name, :last_name, presence: true
  validates :email, :username, :session_token, uniqueness: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :projects_owned,
    foreign_key: :project_owner_id,
    class_name: "Project"
    # dependent: :destroy

  has_many :teams,
    foreign_key: :user_id,
    class_name: "ProjectTeam"

  has_many :stories_owned,
    foreign_key: :story_owner_id,
    class_name: "Story"

  has_many :stories_assigned,
    foreign_key: :assigned_user_id,
    class_name: "AssignedStory"

  has_many :assigned_stories,
    through: :stories_assigned,
    source: :story

  # backend auth
  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(username, password)
    user = User.find_by(username: username)
    return nil unless user
    user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = SecureRandom.urlsafe_base64
    self.save
    self.session_token
  end
end
