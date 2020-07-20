# frozen_string_literal: true

path = Rails.root.join("db", "seeds", "#{Rails.env}.rb")
if File.exist?(path)
  puts "creating seeds..."
  require(path)
end
