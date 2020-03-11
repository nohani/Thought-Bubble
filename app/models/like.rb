class Like < ApplicationRecord

  validates :liker_id, :post_id, presence: true

  belongs_to :liker, class_name: "User", foreign_key: :liker_id
  belongs_to :post
  
end
