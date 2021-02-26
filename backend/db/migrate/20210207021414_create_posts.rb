class CreatePosts < ActiveRecord::Migration[6.0]
  def change
    create_table :posts do |t|
      t.string :username
      t.string :img_src
      t.text :caption
      t.references :cuisine, null: false, foreign_key: true
      t.timestamps
    end
  end
end
