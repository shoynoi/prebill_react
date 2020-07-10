# frozen_string_literal: true

namespace :associate_services do
  desc "update services associated with a user"
  task services: :environment do
    puts "Add user_id to services..."
    user = User.first_or_create!(
      name: "shoynoi",
      email: "shoynoi@example.com",
      password: "password",
      password_confirmation: "password"
    )
    Service.update_all(user_id: user.id)
    puts "Finished."
  end
end
