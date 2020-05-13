class AddQuoteAndSourceColumnsToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :quote, :string
    add_column :posts, :source, :string
  end
end
