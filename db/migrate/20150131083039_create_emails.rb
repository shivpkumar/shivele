class CreateEmails < ActiveRecord::Migration
  def change
    create_table :emails do |t|
      t.string :address
    end
  end
end
