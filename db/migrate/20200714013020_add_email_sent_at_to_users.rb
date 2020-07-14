# frozen_string_literal: true

class AddEmailSentAtToUsers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :remind_sent_at, :datetime
    add_column :users, :renewal_sent_at, :datetime
  end
end
