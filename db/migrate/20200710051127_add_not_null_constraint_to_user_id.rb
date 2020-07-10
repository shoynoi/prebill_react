# frozen_string_literal: true

class AddNotNullConstraintToUserId < ActiveRecord::Migration[6.0]
  def change
    change_column_null :services, :user_id, false
  end
end
