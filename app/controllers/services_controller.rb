# frozen_string_literal: true

class ServicesController < ApplicationController
  def create
    @service = Service.new(service_params)
    if @service.save
      redirect_to root_path
    else
      respond_to do |format|
        format.json { render json: @service.errors }
      end
    end
  end

  private
    def service_params
      params.require(:service).permit(
        :name,
        :description,
        :plan,
        :price,
        :renewed_on,
        :remind_on,
      )
    end
end
