# frozen_string_literal: true

class Api::FlashController < ApplicationController
  def index
    respond_to do |format|
      format.json { render json: flash.to_hash }
    end
  end
end
