# frozen_string_literal: true

class AddUserRefToServices < ActiveRecord::Migration[6.0]
  def change
    add_reference :services, :user, foreign_key: true, index: true
  end
end
