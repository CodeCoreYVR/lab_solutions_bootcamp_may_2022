class CreateTaggings < ActiveRecord::Migration[7.0]
  def change
    create_table :taggings do |t|
      t.references :tag, foreign_key: true
      t.references :product, foreign_key: true
      t.timestamps
    end
  end
end
