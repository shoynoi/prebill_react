# frozen_string_literal: true

class MyAccountController < ApplicationController
  skip_before_action :require_login

  def show
    if logged_in?
      respond_to do |format|
        format.json { render json: { name: current_user.name } }
      end
    else
      head :no_content
    end
  end
end
