class User < ApplicationRecord

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :authored_posts, class_name: "Post", foreign_key: :author_id

  #FeGrip
  attr_reader :password

  after_initialize :ensure_session_token

  def self.find_by_credentials(email, password) 
     user = User.find_by(email: email)
    return user if user && user.is_password?(password)
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

  def self.generate_session_token
    SecureRandom::urlsafe_base64(16)
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save
    self.session_token
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end


end
