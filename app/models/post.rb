class Post < ApplicationRecord
  validates :author_id, presence: true
  validates :post_type, presence: true, inclusion: { in: %w(text photo quote link chat audio video) }
  # validates :content, :quote, presence: true, length: { minimum: 1}, if: :has_this_type?

  belongs_to :author, class_name: "User"
  has_many :likes, class_name: "Like", foreign_key: :post_id
  has_many :likers,
    through: :likes,
    source: :liker

  has_one_attached :photo
  has_one_attached :video
  has_one_attached :audio


  def has_this_type?
    categories = %w(text quote chat)
    categories.any? { |category| self.post_type == category }
  end

end


