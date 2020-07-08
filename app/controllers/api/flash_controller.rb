# frozen_string_literal: true

class Api::FlashController < ApplicationController
  skip_before_action :require_login

  def index
    respond_to do |format|
      format.json { render json: flash.to_hash }
    end
  end
end
