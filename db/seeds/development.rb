# frozen_string_literal: true

user = User.create!(
  {
    name: "akira",
    email: "akira@example.com",
    password: "secret",
    password_confirmation: "secret",
  }
)

service = user.services.create!(
  {
    name: "Spotify",
    price: 980,
    plan: 0,
    renewed_on: Date.today,
    remind_on: Date.today,
    description: "https://www.spotify.com/jp/"
  }
)

Notification.renew_service(service)

services_data = [
  {
    name: "Amazon Prime",
    price: 4900,
    plan: 1,
    description: "v#{'e' * 2000}ry long memo."
  },
  {
    name: "RubyMine",
    price: 8000,
    plan: 1,
    description: "改行入りメモ\nログインページ: https://account.jetbrains.com/login"
  },
  {
    name: "Apple Music",
    price: 980,
    plan: 0
  },
  {
    name: "Youtubeプレミアム",
    price: 1180,
    plan: 0,
  },
]

services_data.each_with_index do |data, i|
  renewed_on = Random.rand(Date.current.beginning_of_year..Date.current.end_of_year)
  user.services.create!(
    {
      **data,
      renewed_on: renewed_on,
      remind_on: renewed_on - i.day,
    }
  )
end
