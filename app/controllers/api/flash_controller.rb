# frozen_string_literal: true

class Api::FlashController < ApplicationController
  skip_before_action :require_login

  def index
    respond_to do |format|
      message = flash.to_hash
      flash.clear
      format.json { render json: message }
    end
  end
end
