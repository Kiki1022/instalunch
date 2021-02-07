class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :img_src
      t.text :caption
      t.belongs_to :user
      t.timestamps
    end
  end
end
