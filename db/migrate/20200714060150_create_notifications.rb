# frozen_string_literal: true

class CreateNotifications < ActiveRecord::Migration[6.0]
  def change
    create_table :notifications do |t|
      t.references :service, null: false, foreign_key: true
      t.boolean :read, default: false, null: false
      t.string :message

      t.timestamps
    end
  end
end
