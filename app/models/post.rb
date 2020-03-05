class Post < ApplicationRecord
  validates :author_id, presence: true
  validates :post_type, presence: true, inclusion: { in: %w(text photo quote link chat audio video) }
  validates :content, presence: true, length: { minimum: 1}, if: :has_this_type?

  belongs_to :author, class_name: "User"

  has_one_attached :photo

  def has_this_type?
    categories = %w(text quote chat)
    categories.any? { |category| self.post_type == category }
  end

end


