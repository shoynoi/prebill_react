# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :flash, only: %i(index)
  end
  root to: "home#index"
  resources :services, only: %i(index new create edit update destroy)
  resource :my_account, only: %i(show), controller: "my_account"

  get "signup" => "users#new"
  post "signup" => "users#create"
  get "login" => "user_sessions#new"
  post "login" => "user_sessions#create"
  delete "logout" => "user_sessions#destroy"
end
