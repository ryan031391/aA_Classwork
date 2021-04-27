class CreateArtWorkShares < ActiveRecord::Migration[5.2]
  def change
    create_table :art_work_shares do |t|
      t.integer :artwork_id, null: false
      t.integer :viewer_id, null: false
      t.timestamps
    end

    add_index :art_work_shares, :artwork_id
    add_index :art_work_shares, :viewer_id
    add_index :art_work_shares, [:artwork_id, :viewer_id], unique: true
  end
end
