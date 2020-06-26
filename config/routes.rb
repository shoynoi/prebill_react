# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :flash, only: %i(index)
  end
  root to: "home#index"
  resources :services, only: %i(new create edit update)
end
