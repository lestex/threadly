class CreateTwits < ActiveRecord::Migration
  def change
    create_table :twits do |t|
      t.string :body

      t.timestamps null: false
    end
  end
end
