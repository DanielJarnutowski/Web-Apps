class CreateDans < ActiveRecord::Migration[5.1]
  def change
    create_table :dans do |t|
      t.string :login

      t.timestamps
    end
  end
end
