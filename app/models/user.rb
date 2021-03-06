class User < ApplicationRecord

  validates :username, :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: { minimum: 6 }, allow_nil: true

  has_many :authored_posts, class_name: "Post", foreign_key: :author_id
  
  has_many :likes, class_name: "Like", foreign_key: :liker_id
  has_many :liked_posts, through: :likes, source: :post
  
  has_many :following, class_name: "Follow", foreign_key: :follower_id 
  has_many :followed_users, through: :following, source: :followee

  has_many :followees, class_name: "Follow", foreign_key: :followee_id
  has_many :followed_by_users, through: :followees, source: :follower

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
