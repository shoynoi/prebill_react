# frozen_string_literal: true

class HomeController < ApplicationController
  skip_before_action :require_login

  def index
    unless logged_in?
      render "welcome/index"
    end
  end
end
