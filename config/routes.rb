# frozen_string_literal: true

Rails.application.routes.draw do
  namespace :api do
    resources :notifications, only: %i(index update)
  end
  root to: "home#index"
  resources :services, only: %i(index new create edit update destroy)
  resource :my_account, only: %i(show edit update), controller: "my_account"

  get "signup" => "users#new"
  post "signup" => "users#create"
  get "login" => "user_sessions#new"
  post "login" => "user_sessions#create"
  delete "logout" => "user_sessions#destroy"
end
