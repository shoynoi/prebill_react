# frozen_string_literal: true

class ServicesController < ApplicationController
  before_action :load_service, only: %i(update)

  def new
  end

  def create
    @service = Service.new(service_params)
    if @service.save
      flash.notice = "サービスを登録しました。"
      head :ok
    else
      respond_to do |format|
        format.json { render json: @service.errors.full_messages, status: 422 }
      end
    end
  end

  def update
    if @service.update(service_params)
      flash.notice = "サービスを修正しました。"
      head :ok
    else
      respond_to do |format|
        format.json { render json @service.errors.full_messages, status: 422 }
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

    def load_service
      @service = Service.find(params[:id])
    end
end
